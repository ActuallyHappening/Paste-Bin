import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.main.dev.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Only app should be handled here */}
    {/* Possibility for production / dev changes to be put here */}
    <App />
  </React.StrictMode>
)
