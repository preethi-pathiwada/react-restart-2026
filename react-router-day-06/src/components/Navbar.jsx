import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <nav style={{display:'flex', gap:'15px'}}>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <NavLink to="/products">Products</NavLink>
            
        </nav>
    )
}

export default Navbar