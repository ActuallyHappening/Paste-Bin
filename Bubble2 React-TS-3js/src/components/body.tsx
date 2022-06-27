import { LeftNavbar, RightNavbar, TopNavbar } from './guis/GUIs'
import { HorizontalDivider, VerticalDivider } from './styles/LayoutHelper'
import CenterCanvas from './threecanvas/CenterCanvas'


const Body = () => {
  return (
    <div className='Body'>
      hello!
      <VerticalDivider>
        <TopNavbar />
        <HorizontalDivider>
          <LeftNavbar />
          <CenterCanvas />
          <RightNavbar />
        </HorizontalDivider>
      </VerticalDivider>
    </div>
  )
}

export default Body