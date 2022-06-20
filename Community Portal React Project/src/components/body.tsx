// Will be the only thing imported by App.tsx

import NavBar from "./navbar/NavBar"
import Panels from "./panels/Panels"
import Three from './three/Three'
import Globe from './three/globe/Globe'

const Body = ({_G}: {_G: Object}) => {
  return (
    <>
    <NavBar projects={_G.DropDownMenu.items} />
    <Three>
      <Globe />
    </Three>
    {/* <Panels /> */}
    </>
  )
}

export default Body