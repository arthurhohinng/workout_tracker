import Exercises from './components/Exercises'
import {useState, useEffect} from 'react'
import AddExercises from './components/AddExercises'

function App() {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    getExercises()
  }, [])
  
  const getExercises = async () => {
    const exercisesFromServer = await fetchExercises()
    setExercises(exercisesFromServer)
  }

  const fetchExercises = async () => {
    const res = await fetch('/exercises')
    const data = await res.json()
    return data
  }

  const addExercise = async (exercise) => {
    await fetch('/exercises/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(exercise)
    })
    getExercises()
  }

  const deleteExercise = async (id) => {
    await fetch(`/exercises/delete/${id}`, {method: 'POST'})
    setExercises(exercises.filter(exercise => exercise.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> WORKOUT LAD</h1>
      </header>
      <AddExercises onAdd={addExercise}/>
      <Exercises exercises={exercises} onDelete={deleteExercise}/>
    </div>
  );
}

export default App;
