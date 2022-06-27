import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { T_HelperOptions } from '../../styles/LayoutHelper'
import Engine from '../../../assets/GLTF_Prebuilt_Modules/Engine'

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
      <Engine />
      {children}
    </Canvas>
  )
}

export default canvas