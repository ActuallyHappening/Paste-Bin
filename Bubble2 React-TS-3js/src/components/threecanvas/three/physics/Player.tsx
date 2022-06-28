import { useBox, usePlane, useSphere } from '@react-three/cannon'
import { useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useState } from 'react'



const Player = ({_ref}) => {
  const [hovered, setHovered] = useState(false)
  const [boxRef, api] = useSphere(() => ({type: "kinematic", position: [0, 5, 0]}))
  useCursor(hovered) /* Sets cursor to grabbing */
  useFrame(() => {
    // _ref.current = boxRef
    Math.random() < 0.001 ? console.log(_ref.current) : null
    const pos = _ref.current.toArray()
    pos[1] += 3
    api.position.set(pos[0], pos[1], pos[2])
  })
  return (
    <>
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      ref={boxRef}
    >
      <sphereBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="black" />
    </mesh>
    </>
  )
}

export default Player