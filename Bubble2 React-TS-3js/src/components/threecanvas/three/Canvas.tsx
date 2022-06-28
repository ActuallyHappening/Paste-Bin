import Camera from './Camera'
import { Canvas } from '@react-three/fiber'
import DEBUG from './DEBUG'

const Canvas = () => {
  return (
    <Canvas>
      <DEBUG />
      <Camera />
    </Canvas>
  )
}

export default Canvas