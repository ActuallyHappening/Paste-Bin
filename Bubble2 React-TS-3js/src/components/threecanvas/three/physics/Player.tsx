import { useBox, usePlane } from '@react-three/cannon'
import { useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useState } from 'react'



const Player = () => {
  const [hovered, setHovered] = useState(false)
  const [boxRef, api] = useBox(() => ({mass: 1, position: [0, 5, 0]}))
  useCursor(hovered) /* Sets cursor to grabbing */
  useFrame(() => {
    api.applyLocalForce([0, 0, 0 ], [0, 0, 0])
  })
  return (
    <>
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      ref={boxRef}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="black" />
    </mesh>
    </>
  )
}

export default Player