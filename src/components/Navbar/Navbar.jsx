import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
    return (
      <div className="container">
        <nav className="nav navbar border-bottom body">
          {/* <a href="" onClick={(event) => {event.preventDefault(); setView('home');}}>Home</a>
            <a href="" onClick={(event) => {event.preventDefault(); setView('properties');}}>Properties</a> */}
          {/* <a href="" onClick={(event) => {event.preventDefault(); setView('residents');}}>Residents</a> */}
          <Link to="/" className="navbar-brand">Home</Link>
          <Link to="/properties" className="navbar-brand">Properties</Link>
        </nav>
      </div>
    );
};

export default Navbar;