import { useBox, usePlane } from '@react-three/cannon'
import { useCursor } from '@react-three/drei'
import { useState } from 'react'



const Player = () => {
  const [hovered, setHovered] = useState(false)
  const [boxRef] = useBox(() => ({mass: 1, position: [0, 5, 0]}))
  useCursor(hovered) /* Sets cursor to grabbing */
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