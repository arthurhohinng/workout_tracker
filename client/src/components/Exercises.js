import React from 'react'
import ExerciseRow from './ExerciseRow'

const Exercises = ({exercises}) => {
    return (
        <div>
            {exercises.map((exercise) => (
                <ExerciseRow key={exercise.id} exercise={exercise}/>
            ))}
        </div>
    )
}

export default Exercises
