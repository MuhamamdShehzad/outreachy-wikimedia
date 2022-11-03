import React from 'react'
import { useState } from 'react';
import './checkTask.scss'
import {tasks} from './tasksource'


function CheckTasks() {

  const [task,setTask]= useState(tasks[0]) 
  const handleNext=(e)=>{
    let currId=task.id;
    
    if(currId<tasks.length-1)
    {
    setTask(tasks[currId+1]);
    }
    else{
      setTask(tasks[0]);
    }
    
  }
 
  return (

    <div className='tasks'>
        <h1>Citation Hunt</h1><br/>
        <p>The Wikipedia snippet below is not backed by a reliable source. Can you find one?</p><br/>
        <p>Click I got this! to go to Wikipedia and fix the snippet, or Next! to see another one. Good luck!</p><br/>
        <h3>{task.inpage}</h3>

        <div className="center">
            <p>{task.desc}</p>
                  <div className="btn">
                    <div className="btn1">
                    <a href={task.links} target="_blank" rel="noreferrer"><button ><span>I got this!</span></button></a>
                    </div>
                    <div className="btn2">
                    <button onClick={handleNext}><span>Next</span></button>
                    </div>
                    
                  </div>
                  <div className="search">
                    <input placeholder='Search for a topic' size={50} className='input-tag'></input>
                  </div>     
        </div>
    </div>
  )
}

export default CheckTasks