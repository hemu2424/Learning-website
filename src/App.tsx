import { useState } from 'react'

import Programs from './components/Programs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
    <div>
      <Programs />
    </div>
  
    </>
  )
}

export default App
