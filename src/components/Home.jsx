import { NavLink } from 'react-router-dom'
import '../UI/Home.css'

const Home = () => {
    return (
        <div className="Home">
            <NavLink to='/Animals' className='home_animals'>
                <h2>Animals</h2>
            </NavLink>
            <NavLink to='/Birds' className='home_birds'>
                <h2>Birds</h2>
            </NavLink>
        </div>
    )
}

export default Home