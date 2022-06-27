import { Helper } from "./styles/LayoutHelper"
import CenterCanvas from "./threecanvas/CenterCanvas"

const BodyOnlyCanvas = () => {
  return (
    <div id='Body'>
      <Helper>
        <CenterCanvas />
      </Helper>
    </div>
  )
}

export default BodyOnlyCanvas