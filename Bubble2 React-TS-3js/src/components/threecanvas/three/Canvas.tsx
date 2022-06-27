import { Physics } from '@react-three/cannon'
import { FirstPersonControls, OrbitControls, TrackballControls } from '@react-three/drei'
import { Canvas, Color, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'
import { ColorRepresentation } from 'three'
import RandomUnit from './Stuff'


const THREECanvas = ({children}: {children?: React.ReactNode}) => {
  const [unitDistance, setUnitDistance] = useState(100)
  const [planeWidth, setPlaneWidth] = useState(10)

  const units = useRef([]!)
  for (let x = -(.5 * planeWidth); x <= .5 * planeWidth; x++) {
    for (let z = -(.5 * planeWidth); z<=.5 * planeWidth; z++) {
      units.current.push(<RandomUnit position={[x * unitDistance, 0, z * unitDistance]}/>);
    }
  }
  return (
    <Canvas
      camera={{position: [0, 100, 0], fov:55, far:1000}}
    >
      <directionalLight color="red" position={[0, 0, 100]} intensity={4}/>
      <OrbitControls
        minDistance={50}
        maxDistance={150}
        enableDamping={true}
        maxPolarAngle={Math.PI / 2 - 0.05}
      />
      {/* <FirstPersonControls movementSpeed={100} lookSpeed={0.01}/> */}
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      <group>
        <Physics>
          <group name="units">
            {(() => {
              let r=[];
              units.current.forEach(unit => r.push(unit));
              return r;
            })()}
          </group>
          <mesh name='player' onClick={() => {
            // setUnits(units);
            console.log('clicked');
          }}>
            <boxGeometry args={[10, 10, 10]}/>
            <meshBasicMaterial color="black"/>
          </mesh>
        </Physics>
      </group>
      {children}
      <CameraHelper />
      <Background background={[0, 15, 255]}/>
    </Canvas>
  )
}

const deg2rad = (degrees: number) => degrees * (Math.PI / 180)

const CameraHelper = () => {
  useThree(({camera}) => {
    //console.log("camera", camera)
    // camera?.rotation.set(deg2rad(90), deg2rad(180), 0)
  })
  const counter = useRef(0)
  useFrame(({camera}, delta) => {
    // Math.random() < 0.1 ? console.log("useFrame", camera, delta) : null
    // counter.current += delta*2
    // camera.rotateX(deg2rad(counter.current))
    // camera.rotateY(deg2rad(counter.current*2))
    // camera.rotateZ(deg2rad(counter.current*3))
  })
  return <></>
}

const Background = ({background}: {background: string | [number, number, number]}) => {
  useThree(({scene}) => {
    if (typeof(background) === "string") {
      scene.background = new THREE.Color(background)
    } else if (typeof(background) === "object") {
      scene.background = new THREE.Color(...background)
    } else {
      scene.background = new THREE.Color(0x0505ff)
      console.warn('Background type not supported')
    }
  })
  return <></>
}

export default THREECanvas