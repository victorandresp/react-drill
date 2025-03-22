import { useState, useEffect } from 'react'
import TableButtons from './components/TableButtons'
import Operation from './components/Operation'
import Result from './components/Result'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [ numberList, setNumberList ] = useState([])

  const operationNumbers = useEffect(()=>{
    console.log('Number changed !!', numberList);
  }, [numberList])
 
  const numberPressed = (number) => {
    setNumberList([...numberList, number])
  }
  return (
    <>
      <Operation />
      <Result />
      <TableButtons numberPressed={numberPressed}/>
    </>
  )
}

export default App
