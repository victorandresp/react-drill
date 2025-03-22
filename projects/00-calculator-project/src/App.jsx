import { useState, useEffect } from 'react'
import TableButtons from './components/TableButtons'
import Operation from './components/Operation'
import Result from './components/Result'
import './App.css'

function App() {
  const [ numberList, setNumberList ] = useState([])
  
  const numberPressed = (number) => {
    setNumberList([...numberList, number])
  }
  return (
    <>
      <Operation numberList={numberList} />
      <Result numberList={numberList}/>
      <TableButtons numberPressed={numberPressed}/>
    </>
  )
}

export default App
