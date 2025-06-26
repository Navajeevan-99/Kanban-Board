import React from 'react'
import Table from './Table'
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
                  <Table/>
            </div>
        </div>


    </div>
  )
}

export default Todo