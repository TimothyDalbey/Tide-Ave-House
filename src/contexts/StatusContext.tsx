import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { statusItems } from '../constants';

type StatusValue = '' | 'wip' | 'done';
type StatusMap = Record<string, StatusValue>;

interface StatusContextType {
  status: StatusMap;
  toggle: (id: string) => void;
  reset: () => void;
}

const STORAGE_KEY = 'tideStatus';

function getDefaultStatus(): StatusMap {
  const defaults: StatusMap = {};
  Object.values(statusItems).flat().forEach(item => {
    defaults[item.id] = item.defaultStatus as StatusValue;
  });
  return defaults;
}

function loadFromStorage(): StatusMap {
  const defaults = getDefaultStatus();
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as StatusMap;
      // Merge: use saved value unless default is 'wip' and saved is empty
      // (allows code updates to mark items in-progress)
      const merged: StatusMap = { ...defaults };
      for (const [key, savedValue] of Object.entries(parsed)) {
        if (defaults[key] === 'wip' && savedValue === '') {
          // Keep the default 'wip' status
          continue;
        }
        merged[key] = savedValue;
      }
      return merged;
    }
  } catch {
    // Ignore parse errors
  }
  return defaults;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export function StatusProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<StatusMap>(loadFromStorage);

  // Save to localStorage whenever status changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(status));
  }, [status]);

  const toggle = useCallback((id: string) => {
    setStatus(prev => {
      const current = prev[id] || '';
      let next: StatusValue;
      if (current === 'done') next = '';
      else if (current === 'wip') next = 'done';
      else next = 'wip';
      return { ...prev, [id]: next };
    });
  }, []);

  const reset = useCallback(() => {
    if (window.confirm('Reset all status items?')) {
      localStorage.removeItem(STORAGE_KEY);
      setStatus(getDefaultStatus());
    }
  }, []);

  return (
    <StatusContext.Provider value={{ status, toggle, reset }}>
      {children}
    </StatusContext.Provider>
  );
}

export function useStatus() {
  const context = useContext(StatusContext);
  if (context === undefined) {
    throw new Error('useStatus must be used within a StatusProvider');
  }
  return context;
}
