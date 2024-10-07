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

  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().split('T')[0];
  const [deadlineDates, setDateTime] = useState([]);

  const [taskID, setID] = useState(100);

  var min = 100;
  var max = 999;

  function deleteTask(id){
    const updateTasks = tasks.filter(task => task.taskID !== id);
    setTasks(updateTasks); 
  }

  function addItem() {
    if(newTask.length > 0){
      setID(Math.round(min + Math.random() * (max - min)));
      
      if(deadlineDates.length > 0){
        setTasks([...tasks, {taskID: taskID, taskTitle: newTask, taskDescription: description || 'No description', taskDate: deadlineDates}]);
      }else{
        setTasks([...tasks, {taskID: taskID, taskTitle: newTask, taskDescription: description || 'No description', taskDate: formattedDate}]);
      };

      setDateTime('');
      setNewTask('');
      setTaskDescription('');
      
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

      <div className='content' style={{display: 'flex', columnGap: '10px', rowGap: '20px', margin: '0 auto', textAlign: 'center'}}>
        <input className='inputTask taskTitle' style={{height: '40px'}} type="text" placeholder="Task Title..." value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <input className='inputTask taskDescription' style={{height: '40px', width: '250px'}} type="text" placeholder="Task Description..." value={description} onChange={(e) => setTaskDescription(e.target.value)}/>
        <input className='inputTask taskDate' type='date' placeholder='dd/mm/aaaa' value={deadlineDates} onChange={(e) => setDateTime(e.target.value)}></input>
        <button type='submit' className='buttonTask' style={{margin: '0 5px', backgroundColor: 'white', border: 'none', borderRadius: '50px'}} onClick={addItem}><Icon style={{margin: '5px 0 0 0'}} path={mdiPlusThick} size={1.2}></Icon></button>
      </div>

      <br></br><br></br>

      <div className='divTasks' style={{display: 'grid', justifyContent: 'center', columnGap: '20px' , rowGap: '20px', margin: '0 auto'}}>
        {tasks.map((task) => <Task key={task.taskID} deleteTask={deleteTask} taskID={task.taskID} taskTitle={task.taskTitle} taskDescription={task.taskDescription} taskDate={task.taskDate}></Task>)}  
      </div>
      
    </div>
  );
}

export default App;
