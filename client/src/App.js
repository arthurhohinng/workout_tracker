import Exercises from './components/Exercises'
import {useState, useEffect} from 'react'

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

  return (
    <div className="App">
      <header className="App-header">
        <h1> WORKOUT LAD</h1>
      </header>
      <Exercises exercises={exercises}/>
    </div>
  );
}

export default App;
