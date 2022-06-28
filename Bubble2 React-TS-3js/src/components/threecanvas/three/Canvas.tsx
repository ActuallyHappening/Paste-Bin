import Camera from './Camera'
import { Canvas } from '@react-three/fiber'
import DEBUG from './DEBUG'
import Player from './physics/Player'
import { Physics, usePlane } from '@react-three/cannon'
import PhysicsStuff from './physics/PhysicsStuff'

const π = Math.PI

const MyCanvas = () => {
  const [planeRef, api] = usePlane(() => ({rotation: [-π/2, 0, 0]}))
  return (
    <Canvas>
      <Player />
      <DEBUG />
      <Camera />
      <PhysicsStuff />
    </Canvas>
  )
}

export default MyCanvas