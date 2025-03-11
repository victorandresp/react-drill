import { useState } from 'react'
import TextBox from "./components/TextBox"
import TodoList from "./components/TodoList"
import './App.css'

// best time: 01:16:53 (without delete)
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
