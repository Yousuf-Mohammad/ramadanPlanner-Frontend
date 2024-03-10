import { useState } from "react";
import data from "../../data/initialTodo"






const TaskList = () => {
    const[todoList,setTodoList]=useState(data);
    const [newTodo,setNewTodo]=useState({})

    const completedTodo=(index)=>{
        todoList[index].complete=(!todoList[index].complete);
        setTodoList([...todoList])
    }


    const handleChange=(e)=>{
        const newInput={
            title:e.target.value,
            completed:false
        }
        setNewTodo(newInput);
        
    }



    const handleSubmit=(e)=>{
            e.preventDefault();
            setTodoList([...todoList,newTodo]);
            setNewTodo('')
    }



    const removeData=(index)=>{
        todoList.splice(index,1)
        setTodoList([...todoList])
        
    }
    
    return (
            <div>
            {todoList.map((todo,index)=>(
            <div key={index} >
                <label className="cursor-pointer label">
                <input type="checkbox" checked={todo.complete} onChange={()=>completedTodo(index)} className="checkbox checkbox-success"  />
                <span className={`label-text ${todo.complete?"line-through text-gray-400":'text-gray-900'}`} >{todo.title}</span>
                <button onClick={(index)=>removeData(index)}>X</button>
                
                </label>
            </div>
            ))}
            
            
            <form onSubmit={handleSubmit}>
            <label htmlFor='newTodo'>New Todo : </label>
            <input type="text" name="newTodo" id="newTodo" value={newTodo.title} onChange={handleChange} required/>
            <button type='submit'>Add Todo</button>
            </form>

            </div>
            )
}

export default TaskList