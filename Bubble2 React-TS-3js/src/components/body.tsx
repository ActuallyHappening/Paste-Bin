import { LeftNavbar, RightNavbar, TopNavbar } from './guis/GUIs'
import { HorizontalDivider, VerticalDivider } from './styles/LayoutHelper'
import CenterCanvas from './threecanvas/CenterCanvas'


const Body = () => {
  return (
    <div id='Body'>
      very top
      <VerticalDivider expand>
        <TopNavbar />
        <HorizontalDivide expand>
          <LeftNavbar />
          <CenterCanvas />
          <RightNavbar />
        </HorizontalDivider>
      </VerticalDivider>
      very bottom!
    </div>
  )
}

export default Body