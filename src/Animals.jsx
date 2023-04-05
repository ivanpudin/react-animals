import './Animals.css'
import Card from './Card'

const Animals = (props) => {
    const searchFilter = props.data.filter(animal => {
        return animal.name.includes(props.searchInput)
    })

    return (
        <div className='animals'>
            {searchFilter.map((item) => {
                return <Card
                key={item.name}
                name={item.name}
                likes={item.likes}
                removeCard={() => props.removeHandler(item.name)}
                removeLikes={() => props.likesHandler(item.name, 'remove')}
                addLikes={() => props.likesHandler(item.name, 'add')} />
             })}
        </div>
    )
}

export default Animals
