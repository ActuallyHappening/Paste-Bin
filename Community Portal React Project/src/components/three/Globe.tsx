import { Canvas } from "@react-three/fiber"
import { useState } from "react"
import { TrackballControls } from '@react-three/drei'

// Is essentially just the globe normally, expressed using react-three-fibre
const ThreeGlobe = () => {
  let [aspect, setAspect] = useState(window.innerWidth / window.innerHeight)
  let [planet, setPlanet] = useState(null)
  
  return (
    <>
    <Canvas camera={{position: [0, 10, 400], fov: 55, aspect: aspect}}>
      <directionalLight color={0xf0fff0} intensity={3.25} position={[-800, 600, 1000]}/>
      <mesh visible={true}>
        <sphereBufferGeometry args={[100]}/>
        <meshPhysicalMaterial color={0x0fff0f} />
      </mesh>
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      <TrackballControls />
    </Canvas>
    </>
  )
}

export default ThreeGlobe