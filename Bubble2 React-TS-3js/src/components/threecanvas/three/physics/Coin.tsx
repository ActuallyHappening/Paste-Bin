import React from 'react'

const Coin = () => {
  return (
    <mesh position={[5, 3,5]}>
      <sphereBufferGeometry args={[1, 15, 15]} />
      <meshStandardMaterial attach="material" color="yellow" />
    </mesh>
  )
}

export default Coin