import React, {useState} from "react";
import Icon from '@mdi/react';
import { mdiDelete, mdiCheckBold } from '@mdi/js';
import 'animate.css';

function Task({taskID, taskTitle, taskDescription, taskDate, deleteTask}){

    const [completed, setCompleted] = useState(false)

    const [bgColor, setBgColor] = useState('white');

    function completedTask(){
      setCompleted(!completed);
      const newColor = completed ? 'white' : '#009874';
      setBgColor(newColor);
    }
    
    return(
        <div className='animate__bounceIn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <div className='taskContent' style={{height: '100%', width: '350px', margin: '0px 0', textAlign: 'center', backgroundColor: bgColor, color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', transition: 'all 0.5s ease-in-out'}} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.0)';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)';}}>
						 
            <div style={{ justifyContent: 'center', marginBottom: '0.5em'}}>
              <h4 style={{ margin: 0, backgroundColor: 'none'}}>{taskTitle}</h4>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '5px', backgroundColor: 'none'}}>
              <div className="task-content" style={{maxWidth: '240px', overflowWrap: 'break-word'}}>
                <p style={{ wordWrap: 'break-word', whiteSpace: 'normal'}}>{taskDescription}</p>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px', flexGrow: 2 }}>
                <button className='button completed ' onClick={completedTask}><Icon style={{margin: '0 0 0 0'}} path={mdiCheckBold} size={1.2}></Icon></button>
                <button className='button recicle' onClick={() => deleteTask(taskID)}><Icon style={{margin: '3px 0 0 0'}} path={mdiDelete} size={1}></Icon></button> 
              </div>
            </div>

            <div style={{textAlign: 'center', display: 'flex', flexDirection: 'row', margin:'0 auto', flexGrow: 2, flexWrap: 2, backgroundColor: 'none'}}>
              <input type='date' disabled value={taskDate} style={{textAlign: 'center', width: '110px', border: 'none', backgroundColor: 'none'}}/>
            </div>
          </div>
      </div>
    )
}

export default Task
