import React, {useState} from "react";
import Icon from '@mdi/react';
import { mdiDelete } from '@mdi/js';
import 'animate.css';

function Task({taskTitle, taskDescription, taskDate}){
    
    const [completed, setCompleted] = useState(false)

		function deleteTask(index){
      console.log('Deleted task'); 
			return
		}

    function completedTask(){
      setCompleted(!completed);
      console.log(completed);
    }
    
    return(
        <div className='animate__bounceIn' style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <div style={{height: '100%', width: '350px', margin: '0px 0', textAlign: 'center', backgroundColor: 'white', color: 'black', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '10px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', transition: 'all 0.5s ease-in-out'}} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.0)';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)';}}>
						 
            <div style={{ justifyContent: 'center', marginBottom: '0.5em', backgroundColor: 'white' }}>
              <h4 style={{ margin: 0 }}>{taskTitle}</h4>
            </div>

            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '5px'}}>
              <div className="task-content" style={{maxWidth: '240px', overflowWrap: 'break-word', backgroundColor: 'white'}}>
                <p style={{ wordWrap: 'break-word', whiteSpace: 'normal'}}>{taskDescription}</p>
              </div>

              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px', flexGrow: 2 }}>
                <button className='button completed ' onClick={() => completedTask} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.2)';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)';}}>Concluída</button>
                <button className='button recicle' onClick={() => deleteTask} onMouseEnter={(e) => {e.target.style.transform = 'scale(1.2)';}} onMouseLeave={(e) => {e.target.style.transform = 'scale(1)';}}><Icon path={mdiDelete} size={1}></Icon></button> 
              </div>
            </div>

            <div style={{textAlign: 'center', display: 'flex', flexDirection: 'row', margin:'0 auto', flexGrow: 2, flexWrap: 2}}>
              <input type='date' value={taskDate} style={{textAlign: 'center', width: '110px', border: 'none'}}/>
            </div>
          </div>
      </div>
    )
}

export default Task
