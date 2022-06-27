import { Helper } from "./styles/LayoutHelper"
import CenterCanvas from "./threecanvas/CenterCanvas"

const BodyOnlyCanvas = () => {
  return (
    <div id='Body'>
      <Helper>
        <CenterCanvas max_content/>
      </Helper>
    </div>
  )
}

export default BodyOnlyCanvas