import './App.css';
import { useState } from 'react'
import Icon from '@mdi/react';
import {mdiPlusThick} from '@mdi/js';
import 'animate.css';

import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState([]);
  
  const [newTask, setNewTask] = useState('');

  const [description, setTaskDescription] = useState('');

  function addItem(event, index) {
    if(newTask.length >= 3){
      setTasks([...tasks, {taskTitle: newTask, taskDescription: description || 'No description'}]);
      setNewTask('');
    }else{
      alert('[ERROR] No task title!')
    }
  }

  return (
    <div className="App" style={{height: 'auto', width:'100%', margin: 'auto', color: 'white'}}>
      <br></br>

      <div style={{margin: 'auto', textAlign: 'center'}}>
        <h1>To Do</h1>
        <p>Organize, prioritize, and accomplish more!</p>
      </div>
      
      <br></br>

      <div className='content' style={{display: 'flex', margin: 'auto', textAlign: 'center'}}>
        <input className='inputTask' style={{height: '40px', width: '150px'}} type="text" placeholder="Task Title..." value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <input className='inputTask' style={{height: '40px', width: '250px'}} type="text" placeholder="Task Description..." value={description} onChange={(e) => setTaskDescription(e.target.value)}/>
        <button type='submit' className='buttonTask' style={{margin: '0 5px', height: '40px', width: '40px', backgroundColor: 'white', border: 'none', borderRadius: '50px'}} onClick={addItem}><Icon style={{margin: '5px 0 0 0'}} path={mdiPlusThick} size={1.2}></Icon></button>
      </div>

      <br></br>

      {tasks.map((task) => <Task taskTitle={task.taskTitle} taskDescription={task.taskDescription}></Task>)}

    </div>
  );
}

export default App;
