import { useState } from 'react'
import TableButtons from './components/TableButtons'
import Operation from './components/Operation'
import Result from './components/Result'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Operation />
      <Result />
      <TableButtons />
    </>
  )
}

export default App
