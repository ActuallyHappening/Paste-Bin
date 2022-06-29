import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { Point, Points } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import Coin from './Coin'
import Player from './Player'

const π = Math.PI

function findGroundIntersectionPoint(e, uuid) {
  const intersectOnPlanePoint = e.intersections[0].point
  e.intersections.forEach(i => {
    /* console.log("i.eventObject:", i.eventObject, 
    "i.object", i.object, "isdifferent: ", i.object.uuid !== e.eventObject.uuid)
     */
    if(i.object.uuid === uuid) {
      console.log("i.eventObject FOUND:", i.eventObject, i.point.y)
    }
    return i.point
  })
  return intersectOnPlanePoint // Default
}

function Ground({_ref, ...props}) {
  const pointRef = useRef()
  const [debugPos, setDebugPos] = useState<number[]>([0, 0, 0])
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
        console.log("Moved mouse to:", e.point)
        _ref.current = e.point.toArray()
        setDebugPos(e.point.toArray())
      }}
      >
      <planeGeometry args={[100, 100]} />
    </mesh>
      </>
  )
}

const PhysicsStuff = () => {
  const debugPosRef = useRef<THREE.Vector3>()
  return (
    <Physics>
      <Debug color="green">
        <Coin />
        <Ground _ref={debugPosRef}/>
        <Player _ref={debugPosRef}/>
      </Debug>
    </Physics>
  )
}

export default PhysicsStuff