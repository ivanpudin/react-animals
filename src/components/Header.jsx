import '../UI/Header.css'

const Header = (props) => {
    return (
        <header className='Header'>
            <h1>Welcome to our Zoo!</h1>
            {props.children}
        </header>
    )
}

export default Header
