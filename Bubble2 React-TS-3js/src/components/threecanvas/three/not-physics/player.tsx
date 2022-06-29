import { useFrame } from '@react-three/fiber'
import { useState } from 'react'

const Player = ({ exposePositionSetter }) => {
  const [position, setPosition] = useState([0, 0, 0])
  useFrame(() => {
    if (!exposePositionSetter?.current) {
      console.log("exposePositionSetter is null")
      return
    }
    setPosition(exposePositionSetter.current)
  })
  return (
    <mesh position={[position[0], 2, position[2]]}>
      <sphereGeometry args={[1, 15, 15]} />
      <meshBasicMaterial color="black" />
    </mesh>
  )
}

export default Player
