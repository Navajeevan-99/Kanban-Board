import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";
import './Table.css'
const Table=()=>{
let [name,setname]=useState("");
let [task,settask]=useState("");
let [due,setdue]=useState(new Date());
let [det,setdet]=useState([]);
    const add=()=>{
        if (task!=="" && name!=""){
            setdet([...det,[name,task,formatDate(due)]]);
        }

    }
    const changes=(e)=>{
        setname(e.target.value);
    }
    const change=(e)=>{  
        settask(e.target.value)
    }
    const drag=(e)=>{
        e.dataTransfer.setData("text",e.target.id);
        
    }
    const changedate=(e)=>{

        setdue(new Date(e.target.value));
    }
  const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

  return (
    <>
    <table className='intable'>
    <tbody>
    <tr>
    <td>Name</td><td>:</td>
    <td>
    <input type='text' value={name} onChange={(e)=>(
        changes(e))
  }/></td></tr>
  <tr>
  <td>Task</td><td>:</td>
  <td>
   <input type='text'value={task} onChange={(e)=>{
    change(e);
   }}/></td></tr>
   <tr>
  <td>Due</td><td>:</td>
  <td>
   <input type='date' value={formatDate(due)} onChange={(e)=>{
    changedate(e);
   }}/></td></tr>
   
   <tr>
    <td></td><td></td>
   <td id="button">
   <FaPlus role='button' tabIndex={0} onClick={add}/>
   </td></tr>
   </tbody>
   </table>
   {
   det.map((d,index)=>(
   <table className="table" key={index} draggable="true" onDragStart={drag} id={index}>
    <tbody>
    <tr>
     <td>Name:</td><td>:</td><td>{d[0]}</td></tr>
     <tr>
     <td>Task:</td><td>:</td><td>{d[1]}</td></tr>
     
     <tr><td>Due:</td><td>:</td><td>{d[2]}</td></tr>
    </tbody>
    
   </table>             
   ))
   
   }   
    </>
  )
}

export default Table