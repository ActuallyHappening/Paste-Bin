import React from 'react'
import Icon from './icon/Icon'

const NavBar = () => {
  return (
    <div className="site-nav">
					<Icon />
				<button aria-label="Toggle site navigation menu" className="menu-toggle text--light" type="button">
					<span className="material-icons md-xl">&#xe5d2;</span>
					<span className="material-icons md-xl">&#xe5cd;</span>
				</button>
				<nav className="dropdown-menu">
					<ul className="menu__links">
            <DropDownMenu/>
						{/* <li>
							<a href="#about" className="menu__link">About</a>
						</li>
						<li>
							<a href="#contact" className="menu__link">Contact us</a>
						</li> */}
					</ul>
				</nav>
			</div>
  )
}

export default NavBar