import { Link, useNavigate } from "react-router-dom";

const PropertyDetail = ({ selectedProperty }) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h3>{selectedProperty.name}</h3>
            <p>{selectedProperty.location}</p>
            <p>{selectedProperty.apartments}</p>
            <Link to={`/properties/${selectedProperty._id}/edit`}>
                <button>Update Property?</button>
            </Link>
            {/* <button onClick={() => handlePropDeleteConfirmation(selectedProperty._id)}>Delete Property?</button> */}
            <Link to={`/properties/${selectedProperty._id}/delete`}>
                <button>Delete Property?</button>
            </Link>
            <button onClick={() => navigate('/properties')}>Back to Properties</button>
        </div>
    )
};

export default PropertyDetail;