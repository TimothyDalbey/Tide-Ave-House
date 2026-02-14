import { useState, FormEvent } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Card, Alert } from '../ui';

interface ProtectedSectionProps {
  children: React.ReactNode;
  title?: string;
}

export function ProtectedSection({ children, title = 'Protected Content' }: ProtectedSectionProps) {
  const { isAuthenticated, currentUser, login, logout } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    const success = login(username, password);
    if (!success) {
      setError('Invalid username or password');
      setPassword('');
    }
  };

  if (isAuthenticated) {
    return (
      <>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'flex-end', 
          alignItems: 'center',
          marginBottom: '10px',
          padding: '8px 15px',
          background: 'rgba(39, 174, 96, 0.1)',
          borderRadius: '8px',
          fontSize: '.85rem'
        }}>
          <span style={{ color: 'var(--success)', marginRight: '15px' }}>
            🔓 Logged in as <strong>{currentUser}</strong>
          </span>
          <button
            onClick={logout}
            style={{
              background: 'transparent',
              border: '1px solid var(--border)',
              padding: '4px 12px',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '.8rem',
              color: 'var(--text-light)'
            }}
          >
            Logout
          </button>
        </div>
        {children}
      </>
    );
  }

  return (
    <Card title={`🔒 ${title}`}>
      <Alert type="info" icon="🔐">
        This section contains sensitive financial information and requires authentication.
      </Alert>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '30px auto' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              fontSize: '1rem'
            }}
            autoComplete="username"
          />
        </div>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 500 }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '6px',
              border: '1px solid var(--border)',
              fontSize: '1rem'
            }}
            autoComplete="current-password"
          />
        </div>
        
        {error && (
          <div style={{ 
            color: 'var(--danger)', 
            marginBottom: '15px',
            padding: '10px',
            background: 'rgba(231, 76, 60, 0.1)',
            borderRadius: '6px',
            fontSize: '.9rem'
          }}>
            ⚠️ {error}
          </div>
        )}
        
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            background: 'var(--primary)',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: 500,
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
    </Card>
  );
}
