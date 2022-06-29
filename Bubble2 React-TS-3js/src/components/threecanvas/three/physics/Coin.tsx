import { useBox } from '@react-three/cannon'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const v3 = (p: [number, number, number]) => new THREE.Vector3(p[0], p[1], p[2])

const Coin = ({playerPosRef}) => {
  const [touching, setTouching] = useState(false)
  const [ref, api] = useBox(() => ({
    type: "Kinematic",
    position: [5, 2, 0],
    mass: 1,
    // shape: "Sphere",
    // args: [1, 15, 15],
    // material: "MeshPhongMaterial",
    color: "yellow",
    wireframe: true,
    castShadow: true,
    receiveShadow: true,
    visible: true,
    rotation: [0, 0, 0],
    rotationSpeed: [0, 0, 0],
  }))
  const currentPos = useRef([0, 0, 0])
  useEffect(() => {
    const  unsubscribe = api.position.subscribe(pos => currentPos.current = pos)
    return unsubscribe
  })
  const touchDistance = 1.8;
  useFrame(() => {
    // Check player position and find if distance between then is < touchDistance
    // If so, then make coin invisible
    if (playerPosRef.current) {
      const playerPos = playerPosRef.current
      const coinPos = currentPos.current as [number, number, number]
      const distance = v3(playerPos).distanceTo(v3(coinPos))
      // console.log("coin distance calc", playerPos, coinPos)
      if (distance < touchDistance) {
        console.log("TOUCHING! distance:", distance)
      }
      setTouching(distance < touchDistance)
    }
  })
  return (
    <>
    <mesh ref={ref}>
      <sphereBufferGeometry args={[1, 20, 20]} />
      <meshPhongMaterial color="yellow" />
    </mesh>
    <mesh>
      <boxGeometry />
      <meshStandardMaterial color={touching ? "yellow" : "green"} />
    </mesh>
    </>
  )
}

export default Coin