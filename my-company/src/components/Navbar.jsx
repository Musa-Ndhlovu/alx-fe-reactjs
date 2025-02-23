import { Link } from "react-router-dom"

function Navbar () {
    return (

        <nav style= {{backgroundColor: "green", padding: "10px"}}>
            <ul style= {{display: "flex", justifyContent: "space-around"}}>
                <li><Link to ='/'>Home</Link></li>
                <li><Link to ='/'>About</Link></li>
                <li><Link to ='/'>Services</Link></li>
                <li><Link to ='/'>About</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar