import { useEffect } from 'react'
import ThreeGlobe from './globe/Globe'
import QAD_DO from './QAD_Three_Script'


const QAD_Three = ({ children }) => {
  
  useEffect(() => QAD_DO("src/assets/objects/planet.gltf"), [children])
  
  return (
    <div id='globe-canvas-parent'></div>
  )
}

const testing_globe_three = ({children}) => {
  return (
    <ThreeGlobe />
  )
  }
export default testing_globe_three