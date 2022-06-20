import React, { useRef } from 'react'
import DropDownMenu from './dropdownmenu/DropdownMenu'

const Dropdown = () => {
  const menu = useRef(undefined);
  const button = useRef(null);
  return (
    <>
      <button aria-label="Toggle site navigation menu" className="menu-toggle text--light" type="button" onClick={(e) => {
        console.log("YAY button clicked!");
        button.current?.classList.toggle('is-active')
        menu.current?.classList.toggle('is-active')
      }} ref={button}>
					<span className="material-icons md-xl">&#xe5d2;</span>
					<span className="material-icons md-xl">&#xe5cd;</span>
			</button>
      <nav className='navbar-dropdown-menu' ref={button}>
          <DropDownMenu />
      </nav>
    </>
  )
}

export default Dropdown