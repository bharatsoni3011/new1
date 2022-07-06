import { useEffect, useState } from "react";


function App(){
  const maxScore=localStorage.getItem('maxScore')
  const [currentScore,setCurrentScore]=useState(0)
  const [character,setCharacter]=useState('')
  const [length,setLength]=useState(1)
  const [input,setInput]=useState(false)
  const generateCharacter=()=>{
    const c='QWERTYUIOPASDFGHJKLZXCVBNM';
    setCharacter(c[Math.floor(Math.random()*c.length)])
  }

  const firstInput=(e)=>{
    
  }
  const handleInput=(e)=>{
    if(e.value==character){
      if(length==1){
        firstInput()
        
      }
      else if(length<20){
          
      }
    }
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
