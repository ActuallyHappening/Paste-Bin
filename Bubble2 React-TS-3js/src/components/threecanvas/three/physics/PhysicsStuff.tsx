import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import React from 'react'
import { useEffect } from 'react'
import Player from './Player'

const π = Math.PI

function MyPlane({...props}) {
  const [ref, api] = usePlane(() => ({ rotation: [-π / 2, 0, 0], ...props }))
  useEffect(() => {
    api.applyForce([0, 0, -10 ], [0, 1, 0])
  })
  return (
    <mesh ref={ref}>
      <planeGeometry args={[100, 100]} />
    </mesh>
  )
}

const PhysicsStuff = () => {
  return (
    <Physics>
      <Debug color="black" scale={1.1}>
        <Player />
        <MyPlane />
      </Debug>
    </Physics>
  )
}

export default PhysicsStuff