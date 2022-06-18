import React from 'react'

const CompanyIcon = () => {
  return (
    <a href="/#" tabIndex={-1}>
      <picture className="site-logo">
        <source media="(min-width: 680px)" srcSet="src/assets/images/logo-light.png" type="image/png"/>
        <img alt="" src="src/assets/images/logo-wrapped-light.png" /* type="image/png" *//>
      </picture>
    </a>
  )
}

export default CompanyIcon