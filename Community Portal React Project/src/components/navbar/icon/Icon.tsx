import React from 'react'
import CompanyLogo from '../../../assets/images/logo-light.png'

const CompanyIcon = () => {
  return (
    <a href="/#" tabIndex={-1}>
      <picture className="site-logo">
        <source media="(min-width: 680px)" srcSet={CompanyLogo} type="image/png"/>
        <img alt="" src={CompanyLogo} /* type="image/png" *//>
      </picture>
    </a>
  )
}

export default CompanyIcon