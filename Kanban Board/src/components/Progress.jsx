import React from 'react'
import './Progress.css'
const Progress = () => {
  const drop=(e)=>{
        e.preventDefault();
        var data=e.dataTransfer.getData("text");
        var v=document.getElementById(data)
        v.style.color="rgb(0, 76, 255)";
        e.target.appendChild(v);
    }
    const allowdrop=(e)=>{
        e.preventDefault(e);
    }
  return (
    <div>
        <div id="progressoutborder">
            <div id="progresstitle">
            <h3 id="progress">Progress</h3>
            <h4 id="progressratio">1/3</h4>
            </div>
            <div id="progressinborder" onDrop={drop} onDragOver={allowdrop}>
                
            </div>
        </div>

    </div>
  )
}

export default Progress