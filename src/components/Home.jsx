import { NavLink } from 'react-router-dom'
import '../UI/Home.css'

const Home = () => {
    return (
        <div className="Home">
            <NavLink to='/Animals'>
                <div className='home_animals'>
                    <h2>Animals</h2>
                </div>
            </NavLink>
            <NavLink to='/Birds'>
                <div className='home_birds'>
                    <h2>Birds</h2>
                </div>
            </NavLink>
        </div>
    )
}

export default Home