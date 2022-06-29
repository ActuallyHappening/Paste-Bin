import React from 'react'

const Coin = ({...props}) => {
  return (
    <mesh {...props}>
      <sphereBufferGeometry args={[1, 15, 15]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  )
}

export default Coin