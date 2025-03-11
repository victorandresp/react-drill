import { useState } from 'react'

function TextBox() {
    const[text, setText] = useState("")
    const onChangeText = (e)=> {
        setText(e.target.value)
    }
  return (
    <>
        <div className='flex'>
              <input
                  onChange={onChangeText}
                  className="border-solid border-2 border-white"
                  type="text"
                  title='textBoxData'
                  name="textBoxData"
                  id="textBoxData"
              />
            <button className='bg-green-500 text-white' type="button"> + </button>
              {text}
        </div>
    </>
  )
}

export default TextBox
