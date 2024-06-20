import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            {/* <a href="" onClick={(event) => {event.preventDefault(); setView('home');}}>Home</a>
            <a href="" onClick={(event) => {event.preventDefault(); setView('properties');}}>Properties</a> */}
            {/* <a href="" onClick={(event) => {event.preventDefault(); setView('residents');}}>Residents</a> */}
            <Link to='/'>Home</Link>
            <Link to='/properties'>Properties</Link>
        </>
    )
};

export default Navbar;