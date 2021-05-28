import React from 'react'
import {useState, useEffect} from 'react'

const AddExercises = ({onAdd}) => {
    const [text, setText] = useState('')
    const [set, setSet] = useState(0)
    const [rep, setRep] = useState(0)
    
    const onSubmit= (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add an exercise')
        }
        onAdd({text, set, rep})
        setText('')
        setSet('')
        setRep('')
    }
    return (
        <form className='add-exercise' onSubmit={onSubmit}>
            <div className='form'>
                <label>Exercise</label>
                <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
                <label>Sets</label>
                <input type="number" value={set} onChange={(e) => setSet(e.target.value)}/>
                <label>Reps</label>
                <input type="number" value={rep} onChange={(e) => setRep(e.target.value)}/>
                <input type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default AddExercises
