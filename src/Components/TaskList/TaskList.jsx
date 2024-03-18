import { useState } from "react";
import data from "../../data/initialTodo"
import HijriToday from "../hijriDate/HijriToday";

import { useAddTodoMutation,useGetTodosQuery,useUpdateTodoMutation } from "../../redux/features/dailyTodoSlice/dailyTodoSlice";
import { useSelector } from "react-redux";




const TaskList = () => {
    const[todoList,setTodoList]=useState(data);
    const [newTodo,setNewTodo]=useState({})
    const dateInfo =useSelector((state)=>state.arabicDate)
    const [addTodo] = useAddTodoMutation();


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



    const handleSubmit= async(e)=>{
            e.preventDefault();
            setTodoList([...todoList,newTodo]);
            
                    try {
                        const res = await addTodo({
                            value:"do Something",
                            day:8 ,
                            month:9,
                            year:1445
                        })
                        console.log(res);
                        setNewTodo({title:""})
                    } catch (error) {
                        alert(error?.data?.message || error.message)
                    }
            
    }



    const removeData=(index)=>{
        
        todoList.splice(index,1)
        setTodoList([...todoList])
        
    }
    
    return (
        <div className="w-full  flex flex-col lg:flex-row gap-10 lg:gap-20 min-h-[60dvh] p-4 lg:p-20 justify-center items-center ">
        
        <div className="flex justify-center items-center w-full lg:w-1/2 flex-col lg:flex-row bg-white rounded-lg px-8 py-12 gap-10 z-1 shadow-lg shadow-black">
            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 lg:border-r-4 border-0 border-black ">
                <div className="border-b-2 border-black ">
                    <HijriToday/>
                </div>
                <div className="text-center">
                    <h1 className="text-xl font-semibold ">Today&apos;s Special Task:</h1>
                    <h1 className="text-2xl font-semibold border p-4 border-black mt-4 text-teal-700 rounded-md ">Memorize 1st 4 ayat of Surah Mulk</h1>
                </div>

            </div>
            <div className="flex justify-center items-center flex-col gap-4 w-full p-5 ">
            <h1 className="text-[35px] font-bold underline text-center">Your Daily Targets</h1>
            {todoList.map((todo,index)=>(
            <div key={index} >
                <label className="cursor-pointer label">
                <input type="checkbox" checked={todo.complete} onChange={()=>completedTodo(index)} className="checkbox checkbox-success"  />
                <span className={`label-text mx-4 text-lg ${todo.complete?"line-through text-gray-400":'text-gray-900'}`} >{todo.title}</span>

                <button className="border p-2 font-bold round shadow-md bg-red-600 text-white" onClick={()=>removeData(index)}>X</button>
                
                </label>
            </div>
            ))}

            <form onSubmit={handleSubmit} >
            <input type="text" name="newTodo" id="newTodo" value={newTodo.title} placeholder="Add New Target" onChange={handleChange} required className="border px-4 py-1 border-black"/>
            <button type='submit' className="px-12 py-1 block mx-auto mt-2 text-white text-lg rounded-md bg-teal-900 border border-black shadow-lg hover:shadow-black">Add Todo</button>
            
            
            </form>

            </div>
            
        </div>
        </div>
            )
}

export default TaskList