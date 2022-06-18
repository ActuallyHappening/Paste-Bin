import React from 'react'
import Dropdown from './dropdown/Dropdown'
import Icon from './icon/Icon'

const NavBar = () => {
  return (
    <div className="site-nav">
      <h3>NavBar in site-nav class!</h3>
					<Icon />
          <Dropdown />
			</div>
  )
}

export default NavBar