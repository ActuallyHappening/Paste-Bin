import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import _G from './GlobalState'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App _G={_G}/>
  </React.StrictMode>
)
