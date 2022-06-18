import React from 'react'

const NavBar = () => {
  return (
    <div className="site-nav">
      <a href="/#" tabIndex={-1}>
					<picture className="site-logo">
						<source media="(min-width: 680px)" srcSet="src/assets/images/logo-light.png" type="image/png"/>
						<img alt="" src="src/assets/images/logo-wrapped-light.png" /* type="image/png" *//>
					</picture>
				</a>
    </div>
  )
}

export default NavBar