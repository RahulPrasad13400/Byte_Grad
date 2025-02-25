import { useState } from "react"

export default function TextArea() {
    const [text, setText] = useState("")
    
  return (
    <textarea className="textarea" placeholder="Enter the text"
     spellCheck="false"
     value={text}
     onChange={(e)=>setText(e.target.value)}> 
    </textarea>
  )
}
