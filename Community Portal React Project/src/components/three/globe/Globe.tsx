import { Canvas } from "@react-three/fiber"
import { useRef, useState } from "react"
import { TrackballControls } from '@react-three/drei'
import Planet from './globeassets/Planet'
import GlobeMarkers from './globemarkers/GlobeMarkers'
import { DITUMesh } from "../../../datamodels/Models"

// Is essentially just the globe normally, expressed using react-three-fibre
const ThreeGlobe = ({ houses }: {houses: Array<DITUMesh>}) => {
  const housesRef = useRef(houses)
  const planetRef = useRef(null)

  return (
    <div className="three-canvas-child" id="globe-canvas-parent">
    <Canvas
    id="globe-canvas"
    camera={{position: [0, 10, 400], fov: 55, far: 1000}}
    /* onClick={(e) => console.log('click')}
    onContextMenu={(e) => console.log('context menu')}
    onDoubleClick={(e) => console.log('double click')}
    onWheel={(e) => console.log('wheel spins')}
    onPointerUp={(e) => console.log('up')}
    onPointerDown={(e) => console.log('down')}
    onPointerOver={(e) => console.log('over')}
    onPointerOut={(e) => console.log('out')}
    onPointerEnter={(e) => console.log('enter')} // see note 1
    onPointerLeave={(e) => console.log('leave')} // see note 1
    onPointerMove={(e) => console.log('move')}
    onPointerMissed={() => console.log('missed')} */
    >
      <directionalLight color={0xf0fff0} intensity={3.25} position={[-800, 600, 1000]}/>
      <mesh visible={false} ref={planetRef}>
        <sphereBufferGeometry args={[100]}/>
        <meshPhysicalMaterial color={0x0fff0f} />
      </mesh>
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      <TrackballControls makeDefault noZoom noPan/>

      <Planet rotationSpeed={1 / 4} state={housesRef}/>
      
      <GlobeMarkers dituMeshs={houses}/>
    </Canvas>
    </div>
  )
}

export default ThreeGlobe