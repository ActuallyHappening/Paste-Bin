import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

const canvas = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}

export default canvas