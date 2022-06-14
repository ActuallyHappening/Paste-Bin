import { useState } from 'react'
import QAD_Structure from './components/QAD_Structure'
import QAD_Three from './components/QAD_Three'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <QAD_Structure />
      <QAD_Three/>
    </div>
  )
}

export default App
