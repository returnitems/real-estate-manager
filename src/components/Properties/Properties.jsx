const Properties = ({ setView, propertyList, setSelectedProperty }) => {
    
    const handleClick = (event, property) => {
        event.preventDefault();
        setSelectedProperty(property);
        setView('propdetails');
    };


    return (
        <div> 
            {propertyList.map((property) => (
                <div key={property._id} onClick={(event) => handleClick(event, property)} >
                    <h2>{property.name}</h2>
                </div>
            ))}
            <button onClick={(event) => {event.preventDefault(); setView('addprop'); }}>Add New Property</button>
        </div>
    )
};

export default Properties;