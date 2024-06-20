import { Link } from "react-router-dom";

const Properties = ({ propertyList, setSelectedProperty }) => {
    
    const handleClick = (property) => {
        // event.preventDefault();
        setSelectedProperty(property);
    };


    return (
        <div> 
            {propertyList.map((property) => (
                <div key={property._id}>
                    <Link to={`/properties/${property._id}`} onClick={() => handleClick(property)} >
                        <h2>{property.name}</h2>
                    </Link>
                </div>
            ))}
            <Link to='/properties/new'>
                <button>Add New Property</button>
            </Link>
        </div>
    )
};

export default Properties;