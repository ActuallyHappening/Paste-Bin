import Dropdown from './dropdown/Dropdown'
import Icon from './icon/Icon'
import { T_Children } from '../../GlobalState'
import { MenuItem } from '../../datamodels/Models'

const NavBar = ({ children, items }: {children?: T_Children, items: Array<MenuItem>}) => {
  return (
    <div className="site-nav">
      {/* <h3>NavBar in site-nav class!</h3> */}
					<Icon />
          <Dropdown items={items}/>
			</div>
  )
}

export default NavBar