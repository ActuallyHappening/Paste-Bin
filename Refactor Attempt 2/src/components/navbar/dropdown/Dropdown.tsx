import React from 'react'
import DropDownMenu from './dropdownmenu/DropdownMenu'

const Dropdown = () => {
  return (
    <>
      <button aria-label="Toggle site navigation menu" className="menu-toggle text--light" type="button">
					<span className="material-icons md-xl">&#xe5d2;</span>
					<span className="material-icons md-xl">&#xe5cd;</span>
			</button>
      <nav className='dropdown-menu'>
      <DropDownMenu />
      </nav>
    </>
  )
}

export default Dropdown