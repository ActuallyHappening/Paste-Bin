import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { Point, Points } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import Player from './Player'

const π = Math.PI

function MyPlane({...props}) {
  const pointRef = useRef()
  const [debugPos, setDebugPos] = useState([0, 0, 0])
  const [ref, api] = usePlane(() => ({ rotation: [-π / 2, 0, 0], ...props }))
  return (
    <>
    <Points>
      <pointsMaterial vertexColors />
      <Point ref={pointRef} color="red" position={debugPos}/>
    </Points>
    <mesh
      ref={ref}
      onPointerMove={e => {
        Math.random() < 0.1 ? console.log(e) : null
        const intersectOnPlanePoint = e.intersections[0].point
        console.log(intersectOnPlanePoint)
        setDebugPos(intersectOnPlanePoint)
        //api.applyLocalForce(intersectOnPlanePoint.toArray(), [0, 0, 0])
      }}
      >
      <planeGeometry args={[100, 100]} />
    </mesh>
      </>
  )
}

const PhysicsStuff = () => {
  return (
    <Physics>
      <Debug color="black" scale={1.1}>
        <MyPlane />
        <Player />
      </Debug>
    </Physics>
  )
}

export default PhysicsStuff