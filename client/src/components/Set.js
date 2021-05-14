import { FaCircle } from 'react-icons/fa'

const Set = () => {
    const onClick= (e) => {
        e.target.style.color = "lightgreen"
    }
    return (
        <div className="circles">
            <FaCircle onClick = {onClick}/>
        </div>
    )
}

export default Set
