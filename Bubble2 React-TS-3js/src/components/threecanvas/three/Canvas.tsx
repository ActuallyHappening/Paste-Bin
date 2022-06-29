import Camera, { topLevelPropsForCamera } from './Camera'
import { Canvas } from '@react-three/fiber'
import DEBUG from './DEBUG'
import Player from './physics/Player'
import { Physics, usePlane } from '@react-three/cannon'
import PhysicsStuff from './physics/PhysicsStuff'
import NotPhysics from './not-physics/NotPhysics'

const MyCanvas = () => {
  return (
    <>
    <Canvas
      camera={topLevelPropsForCamera}
      >
      <DEBUG />
      <Camera />
      {/* <PhysicsStuff /> */}
      <NotPhysics />
    </Canvas>
    </>
  )
}

export default MyCanvas