import { useState } from 'react'
import TextBox from "./components/TextBox"
import TodoList from "./components/TodoList"
import './App.css'

function App() {

  const onTextSaved = (textSaved) =>{
    console.log("textSaved", textSaved);
  }

  return (
    <>
      <TextBox onTextSaved={onTextSaved} />
      <TodoList />
    </>
  )
}

export default App
