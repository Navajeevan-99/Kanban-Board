import React from 'react'
import './Dotoday.css'
const Dotoday = () => {
  const drop=(e)=>{
        e.preventDefault();
        var data=e.dataTransfer.getData("text");
        var v=document.getElementById(data)
        v.style.color="rgb(213, 164, 5)";
        e.target.appendChild(v);
    }
    const allowdrop=(e)=>{
        e.preventDefault(e);
    }
  return (
    <div>
        <div id="dotodayoutborder">
            <div id="dotodaytitle">
            <h3 id="dotoday">Do Today</h3>
            <h4 id="dotodayratio">1/3</h4>
            </div>
            <div id="dotodayinborder" onDrop={drop} onDragOver={allowdrop}>
                
            </div>
        </div>
    </div>
  )
}

export default Dotoday