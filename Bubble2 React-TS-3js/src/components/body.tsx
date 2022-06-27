import { LeftNavbar, RightNavbar, TopNavbar } from './guis/GUIs'
import { HorizontalDivider, VerticalDivider } from './styles/LayoutHelper'
import CenterCanvas from './threecanvas/CenterCanvas'


const Body = () => {
  return (
    <div id='Body'>
      <VerticalDivider expand max_content no_overflow>
        <TopNavbar />
        <HorizontalDivider expand>
          <LeftNavbar />
          <CenterCanvas />
          <RightNavbar />
        </HorizontalDivider>
      </VerticalDivider>
    </div>
  )
}

export default Body