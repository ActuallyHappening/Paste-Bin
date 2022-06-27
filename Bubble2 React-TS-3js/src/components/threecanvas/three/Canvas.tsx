import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { T_HelperOptions } from '../../styles/LayoutHelper'

const canvas = ({children}: {children?: React.ReactNode}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      {children}
    </Canvas>
  )
}

export default canvas