import { useState } from 'react'
import ListItem from "./ListItem"

function ToDoList({ items }) {

  return (
    <> 
    {
        items.map((item, index) =>{
          return  (
                <ListItem 
                    key={index}
                    text={item}
                    index={index}
                />
            )
        })
    }
    </>
  )
}

export default ToDoList
