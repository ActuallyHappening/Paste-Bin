import { T_Children } from '../../GlobalState'

const ThreeWrapper = ({children}: {children: T_Children}) => {
  return (
    <div className='three-canvas-parent'>
      {children}
    </div>
  )
}

export default ThreeWrapper