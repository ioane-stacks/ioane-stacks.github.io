import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <div className='navbar'>
            <div className="navbar-image"></div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </div>
    );
}
 
export default Navbar;