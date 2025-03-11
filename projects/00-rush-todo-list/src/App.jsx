import { useState } from 'react'
import TextBox from "./components/TextBox"
import TodoList from "./components/TodoList"
import './App.css'

function App() {
  const [items, setItems] = useState([])
  const onTextSaved = (textSaved) =>{
    setItems([...items, textSaved])
  }

  return (
    <>
      <TextBox onTextSaved={onTextSaved} />
      <TodoList items={items} />
    </>
  )
}

export default App
