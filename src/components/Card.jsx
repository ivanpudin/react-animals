import '../UI/Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <button className='close' onClick={props.removeCard}>X</button>
            <img src={`https://source.unsplash.com/500x400/?${props.name}`} alt={props.name}></img>
            <p>{props.name.toUpperCase()}</p>
            <div className='likes'>
                <button onClick={props.removeLikes}>-</button>
                {props.likes >= 0 ? <p>❤️{props.likes}</p> : <p>💔{props.likes}</p>}
                <button onClick={props.addLikes}>+</button>
            </div>
        </div>
    )
}

export default Card
