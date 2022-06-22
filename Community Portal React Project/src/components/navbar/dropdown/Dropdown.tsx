import { useRef } from 'react'
import { MenuItem } from '../../../datamodels/Models';
import DropDownMenu from './dropdownmenu/DropdownMenu'

const Dropdown = ({items }: {items: Array<MenuItem>}) => {
  const menu = useRef(null);
  const button = useRef(null);
  return (
    <>
      <button aria-label="Toggle site navigation menu" className="menu-toggle text--light" type="button" onClick={(e) => {
        //console.log("YAY button clicked!");
        // @ts-ignore IT WORKS but ts does not know about ref={}
        button.current?.classList.toggle('is-active')
        // @ts-ignore IT WORKS but ts does not know about ref={}
        menu.current?.classList.toggle('is-active')
      }} ref={button}>
					<span className="material-icons md-xl">&#xe5d2;</span>
					<span className="material-icons md-xl">&#xe5cd;</span>
			</button>
      <nav className='navbar-dropdown-menu' ref={button}>
          <DropDownMenu items={items}/>
      </nav>
    </>
  )
}

export default Dropdown