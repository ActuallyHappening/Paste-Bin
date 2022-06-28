import Camera, { topLevelPropsForCamera } from './Camera'
import { Canvas } from '@react-three/fiber'
import DEBUG from './DEBUG'
import Player from './physics/Player'
import { Physics, usePlane } from '@react-three/cannon'
import PhysicsStuff from './physics/PhysicsStuff'

const MyCanvas = () => {
  return (
    <Canvas
      camera={topLevelPropsForCamera}
    >
      <DEBUG />
      <Camera />
      <PhysicsStuff />
    </Canvas>
  )
}

export default MyCanvas