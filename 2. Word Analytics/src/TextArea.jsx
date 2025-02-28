import { useState } from "react"
import Warning from "./Warning"

export default function TextArea({text, setText}) {
    // const [text, setText] = useState("")
    // const [showWarning, setShowWarning] = useState(false)
    const [warning, setWarning] = useState("")

    // number of characters 
    // const numOfCharacters = text.length

     const handleChange = (e) =>{
        let newText = e.target.value
        if(newText.includes("<script>")){
          // setShowWarning(true)
          setWarning('script')
          newText = newText.replace('<script>','')
        }else if(newText.includes("@")){
          // setShowWarning(true)
          setWarning('@')
          newText = newText.replace('@','')
        }else{
          setWarning("")
        }
        setText(newText)
     }
    
  return (
    <div className="textarea" >
      <textarea placeholder="Enter the text"
        spellCheck="false"
        value={text}
        onChange={handleChange}> 
      </textarea>
     {/* { showWarning && <Warning warning={warning} />} */}
     { warning && <Warning warning={warning} />}
    </div>
  )
}
