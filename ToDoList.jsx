import React, {useState} from 'react';

function ToDoList(){

    const [tasks, settasks] = useState([]);
    const [newtask, setnewtask] = useState([]);

    function handleinputchange(e){
        setnewtask(e.target.value);
    }

    function addtask(){
        if(newtask.trim() !== ""){
            settasks(t=>[...t,newtask]);
            setnewtask("")
        }
    }

    function deletetask(index){
        const updatedtasks = tasks.filter((_,i)=> i !== index);
        settasks(updatedtasks);
    }

    function movetaskup(index){
        if(index>0){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index-1]] = 
            [updatedtasks[index-1],updatedtasks[index]];
            settasks(updatedtasks);
        }
    }

    function movetaskdown(index){
        if(index<tasks.length-1){
            const updatedtasks = [...tasks];
            [updatedtasks[index],updatedtasks[index+1]] = 
            [updatedtasks[index+1],updatedtasks[index]];
            settasks(updatedtasks);
        }
    }

    return(
    <div className='to-do-list'>
        <h1>To-Do-List</h1>

        <div>
            <input type="text"
            placeholder='Enter a task...'
            value={newtask} onChange={handleinputchange}/>
            <button className='add-button' 
            onClick={addtask}>
                Add</button>
        </div>

        <ol>
            {tasks.map((task,index)=><li key={index}>
                <span className='text'>{task}</span>
                <button 
                className='delete-button'
                onClick={()=>deletetask(index)}>
                    Delete
                </button>
                <button 
                className='move-button'
                onClick={()=>movetaskup(index)}>
                    UP
                </button>
                <button 
                className='move-button'
                onClick={()=>movetaskdown(index)}>
                    DOWN
                </button>
                </li>)}
        </ol>

    </div>);
}

export default ToDoList