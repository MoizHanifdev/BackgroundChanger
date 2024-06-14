import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('aqua')

  return (
      <div className='w-full h-screen' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 w-[50rem] rounded-xl m-auto  h-16 items-center bg-slate-700'>
        <button className='px-5 py-1 mx-1 rounded-xl text-white' style={{backgroundColor:"red"}} onClick={()=>{setcolor('red')}}>
          Red
        </button>
        <button className='px-5 py-1 mx-1 rounded-xl text-white' style={{backgroundColor:"Green"}} onClick={()=>{setcolor('Green')}}>
          Green
        </button>
        <button className='px-5 py-1 mx-1 rounded-xl text-white' style={{backgroundColor:"Black"}} onClick={()=>{setcolor('Black')}}>
          Black
        </button>
        <button className='px-5 py-1 mx-1 rounded-xl text-white' style={{backgroundColor:"Blue"}} onClick={()=>{setcolor('Blue')}}>
          Blue
        </button>
        <button className='px-5 py-1 mx-1 rounded-xl text-white' style={{backgroundColor:"Orange"}} onClick={()=>{setcolor('Orange')}}>
          Orange
        </button>
        <button className='px-5 py-1 mx-1 rounded-xl text-white' style={{backgroundColor:"Olive"}} onClick={()=>{setcolor('Olive')}}>
          Olive
        </button>
        <button className='px-5 py-1 mx-1 rounded-xl text-black' style={{backgroundColor:"Pink"}} onClick={()=>{setcolor('Pink')}}>
          Pink
        </button>
        <button className='px-5 py-1 mx-1 rounded-xl text-black' style={{backgroundColor:"Yellow"}} onClick={()=>{setcolor('Yellow')}}>
          Yellow
        </button>
        </div>
      </div>
  )
}

export default App
