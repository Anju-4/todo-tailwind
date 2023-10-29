import { useState } from 'react';
import './App.css';

function App() {
  const[task,setTask]=useState([])
  const[values,setValues]=useState("")
  const addTasks = ()=>{
    if(values !== ""){
      setTask([...task,values])
       setValues("")
       console.log(task);
    }
  }

  const deleteAll = (index) => {
        const deleteList = [...task];
        deleteList.splice(index)

    setTask(deleteList)
  }

  const deleteTasks = (index) => {
    const updatedList = [...task];
    updatedList.splice(index,1)
    setTask(updatedList)
  }


  return (
   <div className='flex flex-col items-center  bg-green-300 h-screen'>
    
      <h1 className="text-4xl m-16 font-bold">Simple Todo App</h1>
      
      <div className='p-6'>
        <input className='bg-slate-200 rounded-md p-4 me-4'
         type="text" value={values} onChange={(e)=>{setValues(e.target.value)}} placeholder='Create a new todo ' />
        <button onClick={addTasks} className='bg-blue-500 text-white p-2 rounded font-bold hover:bg-blue-800'>Add Task</button>
      </div>
      <div>
      <button onClick={()=>deleteAll()} 
                      className=" bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600">Delete</button>
      </div>
      <div>
        {
          task?.length >0 ?(
            <ul>
              {
                task.map((values,index)=>(

                  <div className=" flex bg-slate-200 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
                                       
                    <li className="self-center font-semibold pr-10 mr-6 grow">{values}</li>
                    <button onClick={()=>{deleteTasks(index)}} 
                      className=" bg-red-500 text-white p-2 mx-1 rounded-md font-bold hover:bg-red-600">Delete</button>
                  </div>
                 
                ))
              }
            </ul>
          ):(
            <div>
              <p>NO TASK FOUND</p>
            </div>
          )
        }
      </div>
   </div>
  );
}

export default App;
