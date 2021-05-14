import React from 'react'
import Set from './Set'

const ExerciseRow = ({exercise}) => {
    let circles = []
    for (let i = 0; i < exercise.sets; i++) {
        circles.push(<Set/>)
    }
    return (
        <div className="row">
            <div className="row-elements">
                <div>
                    <h2>{exercise.exercise}</h2>
                    <h4>{exercise.reps}x{exercise.sets}</h4>
                </div>
                {circles}
            </div>
        </div>
    )
}

export default ExerciseRow
