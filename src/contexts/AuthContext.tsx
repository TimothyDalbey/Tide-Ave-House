import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { authConfig, AuthUser } from '../config/auth.config';

interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: string | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'tide-ave-auth';

interface StoredAuth {
  user: string;
  timestamp: number;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  // Check for existing session on mount
  useEffect(() => {
    const stored = localStorage.getItem(AUTH_STORAGE_KEY);
    if (stored) {
      try {
        const auth: StoredAuth = JSON.parse(stored);
        const now = Date.now();
        if (now - auth.timestamp < authConfig.sessionTimeout) {
          setIsAuthenticated(true);
          setCurrentUser(auth.user);
        } else {
          // Session expired
          localStorage.removeItem(AUTH_STORAGE_KEY);
        }
      } catch {
        localStorage.removeItem(AUTH_STORAGE_KEY);
      }
    }
  }, []);

  const login = useCallback((username: string, password: string): boolean => {
    const user = authConfig.users.find(
      (u: AuthUser) => u.username.toLowerCase() === username.toLowerCase() && u.password === password
    );
    
    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user.username);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({
        user: user.username,
        timestamp: Date.now()
      }));
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
