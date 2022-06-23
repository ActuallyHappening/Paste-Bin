import { T_Children } from '../../../../GlobalState'

const House = ({children, ...props}:{children: T_Children}) => {
  return (
    <group {...props}>
      {children}
    </group>
  )
}

export default House