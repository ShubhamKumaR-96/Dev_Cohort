import { useState } from "react"

const counterHook = () => {
    const [counter,setCounter]=useState(0)

    function incraseCount(){
        setCounter(counter+1)
    }

  return {
    counter:counter,
    setCounter:setCounter,
    incraseCount
  }
  
}

export default counterHook
