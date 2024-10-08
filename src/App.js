import { useState } from 'react';
import './App.css';
import addIcon from './images/plus.png'
import trash from './images/trash.png'
import edit from './images/edit.png'
import check from './images/check.png'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, markAsDone } from './features/todo/todoSlice';

function App() {
  const dispatch = useDispatch()
  const [input, setInput] = useState("")
  const [edited, setEdited] = useState(false)
  const [editInput, setEditInput] = useState({})
  const [error, setError] = useState("")
  const todos = useSelector(state => state.todos)

  const addTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim() === "") {
      setError("Todo cannot be empty.")
      return;
    }
    dispatch(addTodo(input))
    setInput('')
    setError('');
  }

  const editTodoHandler = (e) => {
    e.preventDefault()
    if (input.trim() === "") {
      setError("Todo cannot be empty.")
      return;
    }
    dispatch(editTodo(editInput))
    setEditInput('')
    setEdited(false)
    setError('');
  }

  return (
    <div className='bg-[#F0E6EA] h-screen w-full grid place-items-center '>
      <div className='bg-[#E3D0D8] h-[80%] w-1/4 aspect-auto rounded-[12px] shadow-mainBox p-2 gap-2 flex flex-col overflow-hidden'>
        <h3 className='text-[20px] flex items-center justify-center text-[#4C424C] ' >Task Terminator</h3>
        <form onSubmit={edited ? editTodoHandler : addTodoHandler} className='flex gap-1'>
          <input type="text" className='w-full h-9 outline-none border border-[#AEA3B0] bg-transparent rounded-md px-3 text-[#827081]  '
            value={edited ? editInput.text : input}
            onChange={(e) => edited ? setEditInput({ ...editInput, text: e.target.value }) : setInput(e.target.value)}
          />
          <button className=' h-9 w-10 bg-[#D0B3C0] border border-[#AEA3B0] rounded-md flex items-center justify-center cursor-pointer'>
            {edited ? <img src={check} alt="" className='h-[0.99rem] cursor-pointer' /> : <img src={addIcon} alt="" className='h-[0.9rem]' />}
          </button>
        </form>
        {error && <p className='text-red-500 text-sm'>{error}</p>}
        <div className='h-full overflow-y-auto'>
          <div className='flex flex-col gap-2 pr-1'>
            {todos.map((todo) => (
              <div key={todo.id} className={`${todo.done ? 'bg-[#D8C0CB]' : 'bg-[#D0B3C0] '} rounded-md px-2 py-2 overflow-hidden break-words text-[0.9rem] flex items-center justify-between`}>
                <div className='flex gap-1 items-center '>
                  <div onClick={() => { dispatch(markAsDone({ id: todo.id })) }} className={`h-3 w-3 border border-[#827081] rounded-[4px] cursor-pointer ${todo.done ? 'bg-[#827081] opacity-40' : ''}`}></div>
                  <p className={`${todo.done ? 'line-through text-gray-400' : ''}, w-[18rem]`}>{todo.text}</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <img src={edit} alt="" className={`h-[0.8rem] cursor-pointer ${todo.done ? 'hidden' : ''}`} onClick={() => { setEditInput(todo); setEdited(true) }} />
                  <img src={trash} alt="" className={`h-[1rem] cursor-pointer ${todo.done ? 'opacity-50' : ''}`} onClick={() => dispatch(deleteTodo(todo.id))} />
                </div>
              </div>))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;