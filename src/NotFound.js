import { Link } from "react-router-dom";

const NotFound = () => {
    return (  
        <div className='not-found'>
            <h2>Error 404 - Donuts not found</h2>
            <p>the page you requested cannot be found. <Link to='/'>Go back to home page</Link></p>
            <div className="donuts-not-found"></div>
        </div>
    );
}
 
export default NotFound;