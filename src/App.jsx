import { useState } from 'react'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import {generateWorkout} from './utils/functions'

function App() {
  const [poison,setPoison] = useState('individual')
  const [workout, setWorkout] = useState(null)
  const [muscles,setMuscles] = useState([])
  const [goal,setGoal] = useState('strenght_power')
  
  function updateWorkout(){
    if(muscles.length < 1){
      return  
    } 
    let newWorkout = generateWorkout({poison,muscles,goal})
    console.log(newWorkout)
    setWorkout(newWorkout)
    
  }

  return (
    
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator poison = {poison} setPoison = {setPoison} muscles = {muscles} setMuscles = {setMuscles} goal = {goal} setGoal = {setGoal} updateWorkout = {updateWorkout}/>
      {workout && (<Workout workout = {workout} />)}
    </main>
  )
}

export default App
