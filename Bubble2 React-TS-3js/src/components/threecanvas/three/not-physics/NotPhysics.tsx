import React, { useRef } from 'react'
import Player from './Player'
import Coin from './Coin'
import Ground from './Ground'

const NotPhysics = () => {
  const groundPointGlobalReference = useRef()
  return (
    <>
      <Ground exposePoint={groundPointGlobalReference}/>
      <Coin position={[0, 1, 5]}/>
      <Player exposePositionSetter={groundPointGlobalReference}/>
    </>
  )
}

export default NotPhysics