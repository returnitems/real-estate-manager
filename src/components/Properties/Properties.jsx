import { useEffect, useState } from "react";

const Properties = ({ setView, propertyService, setSelectedProperty }) => {
    const [propertyList, setPropertyList] = useState([]);

    const handleClick = (event, property) => {
        event.preventDefault();
        setSelectedProperty(property);
        setView('propdetails');
    };

    useEffect(() => {
        const fetchProperties = async () => {
            try {
                const properties = await propertyService.index();
                if (!properties) {
                    throw new Error('No properties found.');
                }
                setPropertyList(properties);
            } catch (error) {
                console.log(error);
            }
        }
        fetchProperties();
    }, []);

    return (
        <div> 
            {propertyList.map((property) => (
                <div key={property._id} onClick={(event) => handleClick(event, property)} >
                    <h2>{property.name}</h2>
                </div>
            ))}
            <button onClick={(event) => {event.preventDefault(); setView('add'); }}>Add New Property</button>
        </div>
    )
};

export default Properties;