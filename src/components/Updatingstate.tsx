"use client"
import { count } from 'console';
import React,{useState} from 'react'


//counter app
function Updatingstate(props:any) {
   //props object
   //props.count
    //[value,Settermethod] =useState (0)
    //update value
  const [value, setvalue] = useState(props.count);
  const [todo, Settodo] = useState("");
  const [obj, setobj] = useState({todo:"", todo2:"", todo3:""})
  const increment=()=>{
   // value = value + 1;
   setvalue(value + 1 );

    console.log (value)
  };
  const decrement=()=>{
    //value = value - 1;
    setvalue(value - 1); 
    
    console.log (value) 
  };
  const updateobj=(e: any)=>{

    setobj({...obj,[e.target.name]:e.target.value})
  }


    return (
    <div className='flex gap-5 justify-center items-center'>
    <div className='flex flex-col gap-3 '>
      <input
      name='todo'
      className='p-4border-1 text-black'
      placeholder='EnterTodo'
      value={obj.todo}
      onChange={updateobj}
      
      ></input>
       <input
       name='todo2'
      className='p-4border-1 text-black'
      placeholder='EnterTodo2'
      value={obj.todo2}
      onChange={updateobj}
      
      ></input>
       <input
       name='todo3'
      className='p-4border-1 text-black'
      placeholder='EnterTodo3'
      value={obj.todo3}
      onChange={updateobj}
      
      ></input>
      </div>
        <button className='bg-blue-600 rounded-xl p-2 ' onClick={decrement}>-</button>
        {value}
        <button className='bg-emerald-500 rounded-xl p-2' onClick={increment}>+</button>
        </div>
        
  )
}

export default Updatingstate