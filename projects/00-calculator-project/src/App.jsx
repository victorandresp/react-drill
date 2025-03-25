import { useState, useEffect } from 'react'
import TableButtons from './components/TableButtons'
import Operation from './components/Operation'
import Result from './components/Result'
import './App.css'

// Personal record: 54:01.82
// Get better: installation time: 9 min

// Theory snippet: Se le llama un 'Commit' en react
// A la comparacion de los cambios del DOM al DOM virtual (DOM virtual es la copia del DOM estatico que se ve en la web)
// Y confirmar que se efectuo un cambio en el dom.

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
