import { useCursor } from '@react-three/drei'
import React, { useState } from 'react'

const Player = () => {
  const [hovered, setHovered] = useState(false)
  useCursor(hovered) /* Sets cursor to grabbing */
  return (
    <>
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="black" />
    </mesh>
    </>
  )
}

export default Player