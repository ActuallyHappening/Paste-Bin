import Camera, { topLevelPropsForCamera } from './Camera'
import { Canvas } from '@react-three/fiber'
import DEBUG from './DEBUG'
import Player from './physics/Player'
import { Physics, usePlane } from '@react-three/cannon'
import PhysicsStuff from './physics/PhysicsStuff'

const MyCanvas = () => {
  return (
    <>
    {/* <Canvas
      camera={topLevelPropsForCamera}
      >
      <DEBUG />
      <Camera />
      <PhysicsStuff />
      <mesh position={[5, 5, 5]}>
      <sphereGeometry args={[1, 10, 10]} />
      <meshStandardMaterial color={"red"} />
      </mesh>
    </Canvas> */}
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color={"red"} />
      </mesh>
    </Canvas>
    </>
  )
}

export default MyCanvas