import { Link } from "react-router-dom";
import './Properties.css';

const Properties = ({ propertyList, setSelectedProperty }) => {
    
    const handleClick = (property) => {
        // event.preventDefault();
        setSelectedProperty(property);
    };


    return (
        <div className="container"> 
            {propertyList.map((property) => (
                <div key={property._id} className="propNames">
                    <Link to={`/properties/${property._id}`} onClick={() => handleClick(property)} >
                        <h2>{property.name}</h2>
                    </Link>
                </div>
            ))}
            <Link to='/properties/new'>
                <button className="btn btn-dark">Add New Property</button>
            </Link>
        </div>
    )
};

export default Properties;