// Will be the only thing imported by App.tsx

import NavBar from "./navbar/NavBar"
import Panels from "./panels/Panels"
import Three from './three/Three'
import Globe from './three/globe/Globe'
import { T_GlobalState } from "../GlobalState"

const Body = ({_G}: {_G: T_GlobalState}) => {
  return (
    <>
    <NavBar items={_G.items} />
    <Three>
      <Globe />
    </Three>
    {/* <Panels /> */}
    </>
  )
}

export default Body