import { Debug, Physics, useBox, usePlane } from '@react-three/cannon'
import { Point, Points } from '@react-three/drei'
import React, { useRef, useState } from 'react'
import { useEffect } from 'react'
import Coin from './Coin'
import Ground from './Ground'
import Player from './Player'

const PhysicsStuff = () => {
  const debugPosRef = useRef<THREE.Vector3>()
  const playerPosRef = useRef([0, 0, 0])
  return (
    <Physics iterations={6}>
      <Debug color="green" scale={1.1}>
        <Coin playerPosRef={playerPosRef}/>
        <Ground _ref={debugPosRef}/>
        <Player _ref={debugPosRef} posRef={playerPosRef}/>
      </Debug>
    </Physics>
  )
}

export default PhysicsStuff