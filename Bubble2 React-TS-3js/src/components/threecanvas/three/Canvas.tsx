import { FirstPersonControls, OrbitControls, TrackballControls } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef, useState } from 'react'
import * as THREE from 'three'

const extras = {
  "basicSphere": [{
    "position": [0, 15, 0],
    "geometry": new THREE.SphereBufferGeometry(10, 32, 32),
    "material": new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true })
  }],
}

const Land = () => {
  const [additions, setAdditions] = useState(extras)
  return (
    <>
    <mesh>
      <boxGeometry args={[100, 5, 100]} />
      <meshStandardMaterial color="green" />
    </mesh>
    {Object.values(additions).forEach((addition, index) => {
      return <mesh key={index} {...addition[0]} />
    })}
    </>
  )
}

const THREECanvas = ({children}: {children?: React.ReactNode}) => {
  return (
    <Canvas
      camera={{position: [0, 100, 0], fov:55, far:1000}}
    >
      <directionalLight color="red" position={[0, 0, 100]} intensity={4}/>
      <OrbitControls />
      {/* <FirstPersonControls movementSpeed={-100} lookSpeed={0.1}/> */}
      <mesh>
        <boxGeometry args={[100, 5, 100]}/>
        <meshBasicMaterial color="green"/>
      </mesh>
      <gridHelper args={[1500, 100]}/>
      <axesHelper args={[500]}/>
      <Land />
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