import React from 'react'

const QAD_Body = () => {
  return (
    <>
      <div className="site-nav">
				<a href="/#" tabIndex={-1}>
					<picture className="site-logo">
						<source media="(min-width: 680px)" srcSet="/assets/images/logo-light.png" type="image/png"/>
						<img alt="" src="/assets/images/logo-wrapped-light.png" type="image/png"/>
					</picture>
				</a>
				<button aria-label="Toggle site navigation menu" className="menu-toggle text--light" type="button">
					<span className="material-icons md-xl">&#xe5d2;</span>
					<span className="material-icons md-xl">&#xe5cd;</span>
				</button>
				<nav className="menu">
					<ul className="menu__links">
						<li>
							<a href="#about" className="menu__link">About</a>
						</li>
						<li>
							<a href="#contact" className="menu__link">Contact us</a>
						</li>
					</ul>
				</nav>
			</div>
    </>
  )
}

export default QAD_Body