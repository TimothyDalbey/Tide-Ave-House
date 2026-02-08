import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BuildProvider } from './contexts/BuildContext.tsx'
import { FinanceProvider } from './contexts/FinanceContext.tsx'
import { StatusProvider } from './contexts/StatusContext.tsx'
import { STRProvider } from './contexts/STRContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StatusProvider>
      <BuildProvider>
        <FinanceProvider>
          <STRProvider>
            <App />
          </STRProvider>
        </FinanceProvider>
      </BuildProvider>
    </StatusProvider>
  </StrictMode>,
)
