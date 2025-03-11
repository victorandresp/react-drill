import { useState } from 'react'
import TextBox from "./components/TextBox"
import TodoList from "./components/TodoList"
import './App.css'

function App() {

  return (
    <>
      <TextBox/>
      <TodoList />
    </>
  )
}

export default App
