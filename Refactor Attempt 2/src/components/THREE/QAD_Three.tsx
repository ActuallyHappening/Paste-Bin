import React, { useEffect } from 'react'
import QAD_DO from './QAD_Three_Script'


const QAD_Three = ({ children }) => {
  
  useEffect(() => QAD_DO("./assets/objects/planet.gltf"), [children])
  
  return (
    <canvas className='tiny-globe'></canvas>
  )
}

export default QAD_Three