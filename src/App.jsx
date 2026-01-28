import { useState } from 'react'
import './App.css'



import PageStart from './Components/PageStart/index1.jsx'
import PageSpy from './Components/PageSpy/index1.jsx'

import Help from './Components/Help/index.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <PageStart/> */}
      <PageSpy/>
      {/* <Help/> */}
    </>
  )
}

export default App
