import { useState ,useEffect} from 'react'
import Navbar from './components/Navbar'
import {v4 as uuidv4} from 'uuid'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
// import './App.css'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todoString=localStorage.getItem("todos")
    if(todoString){
      let todos=JSON.parse(localStorage.getItem("todos"))
      setTodos(todos)

    }
  }, [])
  

const savetoLS=()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
}

const handleEdit =(e,id)=>{
let t=todos.filter(i=>i.id===id)
setTodo(t[0].todo)
let index=todos.findIndex(item=>{
    return item.id===id;
  })
  let newTodos =todos.filter(item=>{return item.id!==id});
  
  setTodos(newTodos)
  savetoLS()
  }



const handleDelete =(e,id)=>{

let index=todos.findIndex(item=>{
    return item.id===id;
  })
  let newTodos =todos.filter(item=>{return item.id!==id});
  
  setTodos(newTodos)
  savetoLS()
}
const handleAdd=()=>{
setTodos([...todos, {id:uuidv4(),todo, isCompleted:false}])
setTodo("")
savetoLS()
}

const handleChange=(e)=>{
setTodo(e.target.value)


}

const handleCheckbox =(e) => {
  let id=e.target.name
  let index=todos.findIndex(item=>{
    return item.id===id;
  })
  let newTodos =[...todos];
  newTodos[index].isCompleted = !newTodos[index].isCompleted;
  setTodos(newTodos)
  savetoLS()
}

const toggleFinished=(e)=>{
  setshowFinished(!showFinished)
}

  return (
    <>
      {/* <div className="body bg-[#202020]"></div> */}

      <Navbar />
      <div className="mx-3 md:container md:mx-auto bg-black rounded-xl p-5 my-5 min-h-[80vh] md:w-1/2 ">
      <h1 className='font-bold text-center text-3xl rounded-full text-white bg-[#111213ff] py-2'>OGtask-Your OverPowered Task Manager</h1>

        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className="text-lg font-bold text-white">Add a Todo</h2>

          <div className="flex">

          <input onChange={handleChange} value={todo} className='rounded-full w-full py-2' type="text" placeholder=' Enter Your Todos...'/>
          <button onClick={handleAdd} disabled={todo.length<3} className='bg-[#111213ff] hover:transition-all text-white p-2 py-1 text-sm hover:font-bold rounded-full mx-3 px-4 '>Save</button>
          </div>
        </div>
        <div className="finished flex items-center gap-2">
        <input type="checkbox" onChange={toggleFinished} checked={showFinished} /><span className='text-white'>Show Finished</span>
        </div>
        <h2 className="font-bold my-4 text-lg text-white">Your Todos</h2>
        <div className="todos">
          {todos.length==0 && <div className='m-5'>No Todos to Display</div>}
          {todos.map(item=>{
         return(showFinished || !item.isCompleted) && <div key={item.id} className="todo  flex  my-3 justify-between">
          <div className='flex gap-5 items-center'>

          <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} />
            <div className={`${item.isCompleted?"line-through text-white decoration-white":"text-white"}`}>{item.todo}</div>
          </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>handleEdit(e,item.id)} className='bg-[#111213ff] hover:transition-all text-white p-2 py-1 text-sm hover:font-bold rounded-md mx-2'><FaRegEdit /></button>
              <button onClick={(e,id)=>handleDelete(e,item.id)} className='bg-[#111213ff] hover:transition-all text-white p-2 py-1 text-sm hover:font-bold rounded-md mx-2 px-2 py-2'><MdOutlineDeleteOutline /></button>
            </div>
          </div>
          })}
        </div>
      </div>



    </>
  )
}

export default App
