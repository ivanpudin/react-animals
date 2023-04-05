import './Search.css'

const Search = (props) => {
    return (
        <input placeholder="Search" onChange={props.searchHandler} />
    )
}

export default Search