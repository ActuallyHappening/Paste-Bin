import { Stats } from '@react-three/drei'
import React from 'react'

const DEBUG = () => {
  return (
    <>
    <Stats showPanel={0}/>
    <gridHelper args={[100, 100]} position={[0, 0, 0]} />
    <axesHelper args={[100]} position={[0, 0, 0]} />
    </>
  )
}

export default DEBUG