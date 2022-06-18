import { useState } from 'react'
import Body from './components/body'
import QAD_Body from './components/QAD_Body'
import QAD_Body2 from './components/QAD_Body2'
import QAD_Three from './components/three/QAD_Three'
import './styles.main.dev.css'

function AppFullscreen() {
  return (
    <main className="content content--fullscreen">
      <Body />
    </main>
  )
}

export default AppFullscreen
