import Camera from './Camera'
import { Canvas } from '@react-three/fiber'
import DEBUG from './DEBUG'
import Player from './player/Player'

const MyCanvas = () => {
  return (
    <Canvas>
      <Player />
      <DEBUG />
      <Camera />
    </Canvas>
  )
}

export default MyCanvas