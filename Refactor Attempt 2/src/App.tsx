import { useState } from 'react'
import QAD_Three from './components/THREE/QAD_Three'
import './styles/main.dev.css'

function AppFullscreen() {
  return (
    <main className="content content--fullscreen">
      <QAD_Three>
        {/* Add potential to add planets / projects and other stuff here :) */}
      </QAD_Three>
    </main>
  )
}

export default AppFullscreen
