import Exercises from './components/Exercises'
import {useState, useEffect} from 'react'
import AddExercises from './components/AddExercises'

function App() {
  const [exercises, setExercises] = useState([])

  useEffect(() => {
    const getExercises = async () => {
      const exercisesFromServer = await fetchExercises()
      setExercises(exercisesFromServer)
    }
    getExercises()
  }, [])

  const fetchExercises = async () => {
    const res = await fetch('/exercises')
    const data = await res.json()
    return data
  }

  const deleteExercise = async (id) => {
    await fetch(`/exercises/${id}`, {method: 'POST'})
    setExercises(exercises.filter(exercise => exercise.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> WORKOUT LAD</h1>
      </header>
      <Exercises exercises={exercises} onDelete={deleteExercise}/>
    </div>
  );
}

export default App;
