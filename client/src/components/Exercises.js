import React from 'react'
import ExerciseRow from './ExerciseRow'

const Exercises = ({exercises, onDelete}) => {
    return (
        <div>
            {exercises.map((exercise) => (
                <ExerciseRow key={exercise.id} exercise={exercise} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Exercises
