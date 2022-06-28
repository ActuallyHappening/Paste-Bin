import { Physics, usePlane } from '@react-three/cannon'
import React from 'react'
import Player from './Player'

function Plane({...props}) {
  const [ref, api] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  )
}

const PhysicsStuff = () => {
  return (
    <Physics>
      <Player />
    </Physics>
  )
}

export default PhysicsStuff