import { useState } from 'react'

function ListItem({ text, index, onDeleteItem}) {

  return (
    <>
      <div className='flex justify-center items-center h-20'>
            <input type="checkbox" title='check' name="checkToDo" />
            <p className='mx-4'>{text}</p>
            <button onClick={ () => onDeleteItem(index)} type='button' className='text-red-600'>X</button>
      </div>
    </>
  )
}

export default ListItem
