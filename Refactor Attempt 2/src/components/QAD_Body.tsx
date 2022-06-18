import { useEffect } from 'react'
import QAD_DO from './navbar/QAD_NavBar_Scripts'
import NavBar from './navbar/NavBar'

const QAD_Body = ({children}) => {

  useEffect(() => QAD_DO(), [children])
  return (
    <>
      <NavBar />
    </>
  )
}

export default QAD_Body