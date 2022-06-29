import { useFrame } from '@react-three/fiber'
import React, { useState } from 'react'

function Player({ exposePositionSetter }) {
  const [position, setPosition] = useState([0, 0, 0])
  useFrame(() => {
    if (!exposePositionSetter?.current) return
    setPosition(exposePositionSetter.current)
  })
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 15, 15]} />
      <meshBasicMaterial color="black" />
    </mesh>
  )
}

export default Player