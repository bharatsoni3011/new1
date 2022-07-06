import { useEffect, useState } from "react";


function App(){
  const maxScore=localStorage.getItem('maxScore')
  const [currentScore,setCurrentScore]=useState(0)
  const [character,setCharacter]=useState('')
  const [length,setLength]=useState(1)
  const generateCharacter=()=>{
    const c='QWERTYUIOPASDFGHJKLZXCVBNM';
    setCharacter(c[Math.floor(Math.random()*c.length)])
  }

  const handleInput=(e)=>{
    if(e.value==character){
      setLength(length+1)
      if(length==20){
        if(maxScore>=currentScore){
          if(maxScore==null){
            localStorage.setItem('maxScore',currentScore)
          }
          setCharacter('Success')
        }
        else{
          setCharacter('Failure')
        }
      }
      else{
        generateCharacter()
      }
    }
    else{
      setCurrentScore(currentScore+0.5)
    }
    console.log(currentScore,character,e.value)
  }

  useEffect(()=>{
    generateCharacter();
    // console.log(character)
  },[])
  
  return (
    <div>
    <div background='yellow'>
      {character}
    </div>
    <input value={character} onChange={handleInput}>
    </input>
    </div>
  )
}
export default App;
