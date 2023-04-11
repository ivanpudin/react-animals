import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = (props) => {
    return (
        <div className="Nav">
            <nav>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/animals'>Animals({props.animals.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/birds'>Birds({props.birds.length})</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about'>About</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav