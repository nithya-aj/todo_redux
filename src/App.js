import { useState } from 'react';
import './App.css';
import addIcon from './images/plus.png'
import trash from './images/trash.png'
import edit from './images/edit.png'

function App() {
  const [done, setDone] = useState(false)
  return (
    <div className='bg-[#E7E6F7] h-screen w-full grid place-items-center '>
      <div className='bg-[#E3D0D8] h-[80%] w-1/4 aspect-auto rounded-[12px] shadow-mainBox p-2 gap-2 flex flex-col overflow-hidden'>
        <h3 className='text-[20px] flex items-center justify-center text-[#4C424C] ' >Task Terminator</h3>
        <div className='flex gap-1'>
          <input type="text" className='w-full h-9 outline-none border border-[#AEA3B0] bg-transparent rounded-md px-3 text-[#827081]  ' />
          <div className=' h-9 w-10 bg-[#D0B3C0] border border-[#AEA3B0] rounded-md flex items-center justify-center cursor-pointer'>
            <img src={addIcon} alt="" className='h-[1rem]' />
          </div>
        </div>
        <div className='h-full overflow-y-auto'>
          <div className='flex flex-col gap-2 pr-1'>

            {Array.from({ length: 20 }).map(() => (<div className='bg-[#D0B3C0] rounded-md px-2 py-2 overflow-hidden break-words text-[0.9rem] flex items-center justify-between'>
              <div className='flex gap-1 items-center '>
                <div onClick={() => setDone(!done)} className={`h-3 w-3 border border-[#827081] rounded-[4px] cursor-pointer ${done ? 'bg-[#827081]' : ''}`}></div>
                React Js
              </div>
              <div className='flex gap-2 items-center'>
                <img src={edit} alt="" className='h-[0.8rem] cursor-pointer' />
                <img src={trash} alt="" className='h-[1rem] cursor-pointer' />
              </div>
            </div>))}

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;