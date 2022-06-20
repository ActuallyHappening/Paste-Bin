import { Canvas, useLoader } from "@react-three/fiber"
import { useState } from "react"
import { TrackballControls } from '@react-three/drei'
import Planet from './globeassets/Planet'

// Is essentially just the globe normally, expressed using react-three-fibre
const ThreeGlobe = () => {
  let [aspect, setAspect] = useState(window.innerWidth / window.innerHeight)
  
  return (
    <div id="globe-canvas-parent" className="three-canvas-parent">
    <Canvas id="globe-canvas" camera={{position: [0, 10, 400], fov: 55, aspect: aspect}}>
      <directionalLight color={0xf0fff0} intensity={3.25} position={[-800, 600, 1000]}/>
      <mesh visible={true}>
        <sphereBufferGeometry args={[100]}/>
        <meshPhysicalMaterial color={0x0fff0f} />
      </mesh>
      <Planet position={[0, 0, 0]}/>
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      <TrackballControls />
    </Canvas>
    </div>
  )
}

export default ThreeGlobe