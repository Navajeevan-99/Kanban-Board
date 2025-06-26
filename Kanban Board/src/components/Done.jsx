import React from 'react'
import './Done.css'
const Done = () => {
  const drop=(e)=>{
        e.preventDefault();
        var data=e.dataTransfer.getData("text");
        var v=document.getElementById(data)
        v.style.color="green";
        e.target.appendChild(v);
    }
    const allowdrop=(e)=>{
        e.preventDefault(e);
    }
  return (
    <div>

        <div id="doneoutborder">
            
            <div id="donetitle">
            <h3 id="done">Done</h3>
            <h4 id="doneratio">1/3</h4>
            </div>
            <div id="doneinborder" onDrop={drop} onDragOver={allowdrop}>
                
            </div>
        </div>
    </div>
  )
}

export default Done