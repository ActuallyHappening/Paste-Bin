import { useBox, usePlane, useSphere } from '@react-three/cannon'
import { useCursor } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useState } from 'react'



const Player = ({_ref, posRef}) => {
  const [hovered, setHovered] = useState(false)
  const [boxRef, api] = useSphere(() => ({type: "Kinematic", position: [0, 5, 0]}))
  useCursor(hovered) /* Sets cursor to grabbing */
  useFrame(() => {
    //Math.random() < 0.001 ? console.log("player point:", _ref.current) : null
    let pos = _ref.current ? _ref.current : [0, 0, 0]//.toArray()
    if (!pos) {
      console.log("Player point not valid :(")
      return
    }
    pos[1] = 2
    api.position.set(pos[0], pos[1], pos[2])
  })
  useEffect(() => {
    const unsubscribe = api.position.subscribe(pos => posRef.current = pos)
    return unsubscribe
  })
  return (
    <>
    <mesh
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      ref={boxRef}
    >
      <sphereBufferGeometry args={[1, 20, 20]} />
      <meshStandardMaterial color="black" />
    </mesh>
    </>
  )
}

export default Player