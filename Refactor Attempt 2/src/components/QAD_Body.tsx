import React, { useEffect } from 'react'
import QAD_DO from './navbar/QAD_NavBar_Scripts'
import DropDownMenu from './navbar/dropdown/menu/DropdownMenu'
import NavBar from './navbar/NavBar'

const QAD_Body = ({children}) => {

  useEffect(() => QAD_DO(), [children])
  return (
    <>
      <NavBar />
      <div className="site-nav">
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
    </>
  )
}

export default QAD_Body