import { useEffect, useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import ResetButton from "./ResetButton";
import Title from "./Title";
import Button from "./Button";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function Card() {
  const [count, setCount] = useState(0)
  
  // when the user presses the SpaceBar 
  useEffect(function(){

    document.addEventListener('keydown', (e)=>{
      if(e.code === 'Space'){
        setCount(count=>count+1)
      }
    })

    return () => document.removeEventListener('keydown', (e)=>{
      if(e.code === 'Space'){
        setCount(count=>count+1)
      }
    })

  },[])

  const handleIncrement = (e) =>{
    if(count>4) return
    setCount(count=>count+1)
    e.currentTarget.blur()
  }
  const handleDecrement = (e) =>{
    if(count<=0) return 
    setCount(count=>count-1)
    e.currentTarget.blur()

  }



  return (
    <div className={`card ${count > 4 && 'card--limit'}`}>
        <Title count={count} />
        <Count count={count} />
        <ResetButton setCount={setCount} />
        <CountButtons>
            <Button count={count} onClick={handleDecrement}><MinusIcon className="count-btn-icon" /></Button>
            <Button count={count} onClick={handleIncrement}><PlusIcon className="count-btn-icon" /></Button>
        </CountButtons>
    </div>  
  )
}
