import { useState } from 'react';
import './App.css';
import Box from './component/Box';



const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
  },
  scissor:{
    name:"Scissors",
    img:"https://www.ikea.com/us/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s"
  },
  paper:{
    name:"Paper",
    img:"https://static-01.daraz.lk/p/26358f015f1838b541f02207c4215908.jpg"
  }
}
function App(userChoice) {
  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")

  const play=(userChoice)=>{
  
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice);
    setResult(judgment(choice[userChoice],computerChoice))
  }
  const judgment = (user,computer) =>{
    console.log("user.name" , user.name)
    console.log("computer.name", computer.name)
    if(user.name == computer.name){
      return "tie";
    }else if(user.name == "Rock" )return computer.name=="Scissors" ? "win" : "lose";
    else if(user.name =="Scissors")return computer.name=="Paper"? "win": "lose";
    else if(user.name =="Paper")return computer.name=="Rock"? "win" : "lose";
    
  }
  const randomChoice = () =>{
    let itemArray = Object.keys(choice) // return keys to an array
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem]
    return choice[final]
  }  
   

  return (
    <div>
    <div className="main">
      <Box title="You" item={userSelect} result={result}/>
      <Box title="Computer" item={computerSelect} result={result}/>
    </div>
    <div className="main">
      <button onClick={()=>play("rock")}>Rock</button>
      <button onClick={()=>play("paper")}>Paper</button>
      <button onClick={()=>play("scissor")}>Scissor</button>
    </div>

    </div>
  );
}

export default App;
