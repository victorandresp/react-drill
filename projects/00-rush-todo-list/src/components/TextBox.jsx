import { useState } from 'react'

function TextBox({ onTextSaved }) {
    const[text, setText] = useState("")
    const onChangeText = (e)=> {
        setText(e.target.value)
    }
    const saveText = () => {
        onTextSaved(text)
        setText("")
    }
  return (
    <>
        <div className='flex'>
              <input
                  value={text}
                  onChange={onChangeText}
                  className="border-solid border-2 border-white"
                  type="text"
                  title='textBoxData'
                  name="textBoxData"
                  id="textBoxData"
              />
            <button onClick={saveText} className='bg-green-500 text-white' type="button"> + </button>
        </div>
    </>
  )
}

export default TextBox
