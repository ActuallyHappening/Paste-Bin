import { Canvas } from "@react-three/fiber"
import { useEffect, useRef, useState } from "react"
import { TrackballControls } from '@react-three/drei'
import Planet from './globeassets/Planet'
import GlobeMarkers from './globemarkers/GlobeMarkers'

// Is essentially just the globe normally, expressed using react-three-fibre
const ThreeGlobe = () => {
  const [aspect, setAspect] = useState(window.innerWidth / window.innerHeight)
  const planet = useRef<THREE.Group>()

  useEffect(() => {
    if (planet.current) {
      planet.current.rotation.y += 0.1
    } else {console.log("No planet")}
  })
  
  return (
    <div id="globe-canvas-parent" className="three-canvas-parent">
    <Canvas id="globe-canvas" camera={{position: [0, 10, 400], fov: 55, aspect: aspect}}>
      <directionalLight color={0xf0fff0} intensity={3.25} position={[-800, 600, 1000]}/>
      <mesh visible={false}>
        <sphereBufferGeometry args={[100]}/>
        <meshPhysicalMaterial color={0x0fff0f} />
      </mesh>
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      <TrackballControls />
      <Planet />
      <GlobeMarkers />
    </Canvas>
    </div>
  )
}

export default ThreeGlobe