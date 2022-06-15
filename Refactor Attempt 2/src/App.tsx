import { useState } from 'react'
import QAD_Body from './components/body/QAD_Body'
import QAD_Body2 from './components/body/QAD_Body2'
import QAD_Three from './components/THREE/QAD_Three'
import './styles/main.dev.css'

function AppFullscreen() {
  return (
    <main className="content content--fullscreen">
      <QAD_Body />
      <QAD_Three>
        {/* Add potential to add planets / projects and other stuff here :) */}
      </QAD_Three>
      <QAD_Body2 />
    </main>
  )
}

export default AppFullscreen
