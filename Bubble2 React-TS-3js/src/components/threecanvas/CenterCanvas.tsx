import { Helper, T_HelperOptions } from '../styles/LayoutHelper'
import Canvas from './three/Canvas'

const CanvasWrapper = ({children, ...helperOptions}: T_HelperOptions) => {
  return (
    <Helper id='THREE-CC-wrapper'>
      <Canvas />
      {children}
    </Helper>
  )
}

export default CanvasWrapper