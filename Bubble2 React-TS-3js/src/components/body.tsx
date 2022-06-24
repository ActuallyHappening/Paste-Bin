import React from 'react'
import { HorizontalDivider, VerticalDivider } from './styles/Global'


const Body = () => {
  return (
    <div className='Body'>
      <HorizontalDivider>
        <NavBar />
        <VerticalDivider>

        </VerticalDivider>
      </HorizontalDivider>
    </div>
  )
}

export default Body