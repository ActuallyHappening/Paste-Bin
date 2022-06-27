import { OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'

const THREECanvas = ({children}: {children?: React.ReactNode}) => {
  return (
    <Canvas
      camera={{position: [0, 10, 0], fov:55, far:1000}}
    >
      <directionalLight color="red" position={[0, 0, 100]} intensity={4}/>
      <OrbitControls />
      <mesh>
        <boxGeometry args={[100, 5, 100]}/>
        <meshBasicMaterial color="green"/>
      </mesh>
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      {children}
      <CameraHelper />
    </Canvas>
  )
}

const deg2rad = (degrees: number) => degrees * (Math.PI / 180)

const CameraHelper = () => {
  useThree(({camera}) => {
    console.log("camera", camera)
    camera?.rotation.set(deg2rad(90), 0, 0)
  })
  return <></>
}

export default THREECanvas