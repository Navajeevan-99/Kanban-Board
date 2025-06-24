import React from 'react'
import './Todo.css'
const Todo = () => {
  return (
    <div>
        <div id="todooutborder">
          <div id="todotitle">
            <h3 id="todo">To Do </h3>
            <h4 id="todoratio">1/3</h4>
            </div>
            <div id="todoinborder">
                <div id="todoelement">
                    <p className='para'>Name : Navajeevan</p>
                    <p className='para'>Task : Front End to complete</p>
                    <p className='para'>Due  : 27.06.25</p>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Todo