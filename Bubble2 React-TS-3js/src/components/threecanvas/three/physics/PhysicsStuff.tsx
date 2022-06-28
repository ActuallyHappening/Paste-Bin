import { Physics } from '@react-three/cannon'
import React from 'react'
import Player from './Player'

const PhysicsStuff = () => {
  return (
    <Physics>
      <Player />
    </Physics>
  )
}

export default PhysicsStuff