import React from 'react'
import Set from './Set'
import {FaTimes} from 'react-icons/fa'

const ExerciseRow = ({exercise, onDelete}) => {
    let circles = []
    for (let i = 0; i < exercise.sets; i++) {
        circles.push(<Set key={i}/>)
    }
    return (
        <div className="row">
            <div className="row-elements">
                <div>
                    <h2>{exercise.exercise}</h2>
                    <h4>{exercise.reps}x{exercise.sets}</h4>
                </div>
                {circles}
                <FaTimes className="delete-button" 
                onClick={() => onDelete(exercise.id)}/>
            </div>
        </div>
    )
}

export default ExerciseRow
