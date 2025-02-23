import { Link } from "react-router-dom"

function Navbar () {
    return (
        
        <nav>
            <ul>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/'>About</Link></li>
                <li><Link to ='/'>Services</Link></li>
                <li><Link to ='/'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar