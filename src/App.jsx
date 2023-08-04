
import { useState } from 'react'
import './App.css'
export function App(){
  const [input,setInput]= useState("")
  const calculateResult=(input)=>{
    
    try{
      const operators = ["+","-","*","/"];
      let operator = null;
      for(let i=0; i < input.length; i++){
        if(operators.includes(input[i])){
          operator = input[i]
          break;
        }
      }
      if(!operator){
        setInput(parseFloat(input).toString());
        return;
      }
      const [operand1,operand2] = input.split(operator).map(parseFloat)
      let result;
      switch (operator) {
        case "+": result= operand1 + operand2;
          break;
        case "-": result= operand1 - operand2;
        break;
        case "*": result= operand1 * operand2;
          break;
        case "/": result= operand1 / operand2;
          break;
      
        default: throw new Error("Invalid operator")
        
      }
      setInput(result.toString());
    }
    catch(error){
      setInput("Error")
    }
  }
  const onHandleClick=(bott)=>{
    if(bott==="c"){
      setInput("")
    }else if(bott==="<"){
      setInput(input.slice(0,-1))
    }else if(bott==="="){
      calculateResult(input);
    }
    else{setInput(input.concat(bott))}
    
  }


    return (
      <div className="container">
        <div className='calc'>
          <h1 id="input">{input}</h1>
          <div className=''>
            <button onClick={()=>{
              onHandleClick("c")
            }}>c</button>
            <button onClick={()=>{
              onHandleClick("<")
            }}>&lt;</button>
            <button onClick={()=>{
              onHandleClick("%")
            }}>%</button>
            <button onClick={()=>{
              onHandleClick("/")
            }}>/</button>
          </div>
          <div className=''>
            <button onClick={()=>{
              onHandleClick("7")
            }}>7</button>
            <button onClick={()=>{
              onHandleClick("8")
            }}>8</button>
            <button onClick={()=>{
              onHandleClick("9")
            }}>9</button>
            <button onClick={()=>{
              onHandleClick("*")
            }}>*</button>
          </div>
          <div className=''>
            <button onClick={()=>{
              onHandleClick("4")
            }}>4</button>
            <button onClick={()=>{
              onHandleClick("5")
            }}>5</button>
            <button onClick={()=>{
              onHandleClick("6")
            }}>6</button>
            <button onClick={()=>{
              onHandleClick("-")
            }}>-</button>
          </div>
          <div className=''>
            <button onClick={()=>{
              onHandleClick("1")
            }}>1</button>
            <button onClick={()=>{
              onHandleClick("2")
            }}>2</button>
            <button onClick={()=>{
              onHandleClick("3")
            }}>3</button>
            <button onClick={()=>{
              onHandleClick("+")
            }}>+</button>
          </div>
          <div className=''>
            <button onClick={()=>{
              onHandleClick("0")
            }}>0</button>
            <button onClick={()=>{
              onHandleClick("00")
            }}>00</button>
            <button onClick={()=>{
              onHandleClick(".")
            }}>.</button>
            <button onClick={()=>{
              onHandleClick("=")
            }}>=</button>
          </div>
        </div>
      </div>
    )
}