import { useState } from 'react'
import './App.css'
import Tags from './components/Tags'
import Random from './components/Random'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen flex flex-col background overflow-x-hidden absolute items-center'>
      <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] mb-[40px]  px-10 py-2 text-3xl font-bold'>RANDOM GIFS</h1>
      <div className='flex flex-col items-center w-full'>
       <Random />
        <Tags />
      </div>
    </div>
  )
}

export default App
