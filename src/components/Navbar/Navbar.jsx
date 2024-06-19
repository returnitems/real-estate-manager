const Navbar = ({setView}) => {
    return (
        <>
            <a href="" onClick={(event) => {event.preventDefault(); setView('home');}}>Home</a>
            <a href="" onClick={(event) => {event.preventDefault(); setView('properties');}}>Properties</a>
            <a href="" onClick={(event) => {event.preventDefault(); setView('residents');}}>Residents</a>
        </>
    )
};

export default Navbar;