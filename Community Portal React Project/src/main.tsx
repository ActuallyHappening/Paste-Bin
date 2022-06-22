import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import _G from './GlobalState'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App _G={_G}/>
)
  {/* <React.StrictMode>

  </React.StrictMode> */}