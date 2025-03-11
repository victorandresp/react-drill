import { useState } from 'react'

function ListItem() {

  return (
    <>
      <div className='flex justify-center items-center h-20'>
            <input type="checkbox" title='check' name="checkToDo" />
            <p className='mx-4'>List Text</p>
            <button type='button' className='text-red-600'>X</button>
      </div>
    </>
  )
}

export default ListItem
