import { NavLink } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <NavLink to='/Animals'>
                <img src="https://source.unsplash.com/400x400/?Animal" alt="animal" />
                <h2>Animals</h2>
            </NavLink>
            <NavLink to='/Birds'>
                <img src="https://source.unsplash.com/400x400/?Bird" alt="bird" />
                <h2>Birds</h2>
            </NavLink>
        </div>
    )
}

export default Home