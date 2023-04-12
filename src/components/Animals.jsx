import '../UI/Animals.css'
import Card from './Card'

const Animals = (props) => {
    const searchFilter = props.data.filter(animal => {
        return animal.name.includes(props.searchInput)
    })

    return (
        <div className='Animals'>
            {searchFilter.map((item) => {
                return <Card
                key={item.name}
                name={item.name}
                likes={item.likes}
                removeCard={() => props.removeHandler(item.name, 'animals')}
                removeLikes={() => props.likesHandler(item.name, 'remove', 'animals')}
                addLikes={() => props.likesHandler(item.name, 'add', 'animals')} />
             })}
        </div>
    )
}

export default Animals
