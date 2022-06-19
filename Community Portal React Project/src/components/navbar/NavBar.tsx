import React, { useEffect } from 'react'
import QAD_DO from './QAD_NavBar_Scripts'
import Dropdown from './dropdown/Dropdown'
import Icon from './icon/Icon'
import { T_Children } from '../../GlobalState'

const NavBar = ({ children }: {children?: T_Children}) => {

  useEffect(() => QAD_DO, [children])
  return (
    <div className="site-nav">
      {/* <h3>NavBar in site-nav class!</h3> */}
					<Icon />
          <Dropdown />
			</div>
  )
}

export default NavBar