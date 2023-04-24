import { NavLink } from 'react-router-dom'
import '../UI/Home.css'
import animals from '../content/animals.jpg'
import birds from '../content/birds.jpg'

const Home = () => {
    return (
        <div className="Home">
            <NavLink to='/Animals'>
                <div className='home_animals'>
                    <img src={animals} alt="wolf" />
                    <h2>Animals</h2>
                </div>
            </NavLink>
            <NavLink to='/Birds'>
                <div className='home_birds'>
                    <img src={birds} alt="parrot" />
                    <h2>Birds</h2>
                </div>
            </NavLink>
        </div>
    )
}

export default Home