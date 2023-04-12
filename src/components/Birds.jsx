import Card from './Card'
import '../UI/Animals.css'

const Birds = (props) => {
    const searchFilter = props.data.filter(bird => {
        return bird.name.includes(props.searchInput)
    })

    return (
        <div className='Animals'>
            {searchFilter.map((item) => {
                return <Card
                key={item.name}
                name={item.name}
                likes={item.likes}
                removeCard={() => props.removeHandler(item.name, 'birds')}
                removeLikes={() => props.likesHandler(item.name, 'remove', 'birds')}
                addLikes={() => props.likesHandler(item.name, 'add', 'birds')} />
             })}
        </div>
    )
}

export default Birds