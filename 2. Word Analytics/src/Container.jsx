import { useState } from "react";
import Stats from "./Stats";
import TextArea from "./TextArea";

export default function Container() {
  const [text, setText] = useState("")
  const numOfCharacters = text.length
  const numOfWords = text.split(' ').length 

  return (
    <main className="container">
      <TextArea text={text} setText={setText}  />
      <Stats numOfCharacters={numOfCharacters} numOfWords={numOfWords} />
    </main>
  )
}
