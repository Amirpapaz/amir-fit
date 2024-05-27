import { useState } from 'react'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'

function App() {
  const [count, setCount] = useState(0)

  function Addition(){
    return setCount((count)=> count+1)
  }

  function Substraction(){
    return setCount((count)=> count-1)
  }
  return (
    
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator/>
    </main>
  )
}

export default App
