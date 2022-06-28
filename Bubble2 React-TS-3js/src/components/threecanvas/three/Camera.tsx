import { OrbitControls, Stars } from '@react-three/drei'
import React from 'react'

const Camera = () => {
  return (
    <>
    <OrbitControls />
    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </>
  )
}

export default Camera