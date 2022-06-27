import { FirstPersonControls, OrbitControls, TrackballControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import RandomUnit, { HoveringSphere } from './Stuff'

const unitDistance = 100;
const unitsWidth = 10;

const THREECanvas = ({children}: {children?: React.ReactNode}) => {
  const [numRandom, setNumRandom] = useState(100)
  return (
    <Canvas
      camera={{position: [0, 100, 0], fov:55, far:1000}}
    >
      <directionalLight color="red" position={[0, 0, 100]} intensity={4}/>
      <OrbitControls />
      {/* <FirstPersonControls movementSpeed={100} lookSpeed={0.01}/> */}
      <mesh>
        <boxGeometry args={[100, 5, 100]}/>
        <meshBasicMaterial color="green"/>
      </mesh>
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      <group name="units">
        {(() => {
          const r = []
          for (let i = 0; i < numRandom; i++) {
            r.push(<RandomUnit position={[Math.floor(i/unitsWidth)*unitDistance, 0, ((i)%unitsWidth)*unitDistance]} key={i}/>)
          }
          return r
        })()}
      </group>
      <mesh name='player'>
        <boxGeometry args={[10, 10, 10]}/>
        <meshBasicMaterial color="black"/>
      </mesh>
      {children}
      <CameraHelper />
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

export default THREECanvas