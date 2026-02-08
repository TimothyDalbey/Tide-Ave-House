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
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...getDefaultStatus(), ...JSON.parse(saved) };
    }
  } catch {
    // Ignore parse errors
  }
  return getDefaultStatus();
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
