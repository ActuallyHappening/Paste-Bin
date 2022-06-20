import React, { useRef } from 'react'
import DropDownMenu from './dropdownmenu/DropdownMenu'

const Dropdown = () => {
  let menu = useRef(undefined);

  let isMenuActive = false;
  /* const toggleMenu() {
    menu.classList.toggle('is-active', isMenuActive)
    menu.classList.toggle('is-active', isMenuActive);
    console.log("toggling menu ...")
  } */
  return (
    <>
      <button aria-label="Toggle site navigation menu" className="menu-toggle text--light" type="button" onClick={(e) => {
        console.log("YAY button clicked!");
        e.target.classList.toggle('is-active', true)
      }}>
					<span className="material-icons md-xl">&#xe5d2;</span>
					<span className="material-icons md-xl">&#xe5cd;</span>
			</button>
      <nav className='navbar-dropdown-menu'>
          <DropDownMenu />
      </nav>
    </>
  )
}

export default Dropdown