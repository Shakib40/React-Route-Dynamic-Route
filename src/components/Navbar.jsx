import {Link} from 'react-router-dom';

export const Navbar = () => {
    return (
        
        <div className="Navbar">

            <Link to="/">Home</Link>

            <Link to="/about">About</Link>

            <Link to="/contactus">Contact</Link>

            <Link to="/products">Products</Link>

            <Link to="/users">Users</Link>

            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>

        </div>
        
    )
}
