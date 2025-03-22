import { useState } from 'react'
import TableButtons from './components/TableButtons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TableButtons />
    </>
  )
}

export default App
