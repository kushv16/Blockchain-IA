import Navbar from './Navbar'
import { IoMdAddCircle } from 'react-icons/io'
import Task from "./Task"

const TodoList = ({tasks, input, setInput, addTask, deleteTask}) => <div className='w-[70%] bg-[#388659] py-4 px-9 rounded-[30px] overflow-y-scroll'>
  <Navbar />
  <h2 className='text-4xl bolder text-white pb-8'>
    TODO List
  </h2>
  <div className='py-3 text-[#FFF]'>TASKS</div>
  <form className='flex items-center justify-center'>
    <input
      className='rounded-[10px] w-full p-[10px] border-none outline-none bg-[#FFF] text-white mb-[10px]'
      placeholder='Add a task...'
      value = {input}
      onChange={e => setInput(e.target.value)}

    />
    <IoMdAddCircle
      // Add an onClick method
      onClick={addTask}
      className='text-[#FFF] text-[50px] cursor-pointer ml-[20px] mb-[10px]'
    />
  </form>
  <ul>
    {tasks.map(item => (
      <Task
        key = {item.id}
        taskText = {item.taskText}
        onClick = {deleteTask(item.id)}
        />
    ))}
     
  </ul>
</div>

export default TodoList
