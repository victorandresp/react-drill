import { useState } from 'react'
import TextBox from "./components/TextBox"
import TodoList from "./components/TodoList"
import './App.css'

// best time: 01:16:53

// Theory snippet: 'Batching'
// React se encarga de ejecutar en lote (batch) el cambio de un estado para actualizar el DOM una sola vez
// Por lo que si se llama un setState() varias veces en una funcion, solo se va a actualizar una sola vez porque 
// se hace por lotes la actualizacion de ese dicho estado. 
function App() {
  const [items, setItems] = useState([])
  const onTextSaved = (textSaved) =>{
    setItems([...items, textSaved])
  }
  const onDeleteItem = (index) =>{
    const itemsModify = [...items]
    itemsModify.splice(index, 1)
    setItems(itemsModify)
  }

  return (
    <>
      <TextBox onTextSaved={onTextSaved} />
      <TodoList items={items}  onDeleteItem={onDeleteItem} />
    </>
  )
}

export default App
