import { Link, useNavigate } from "react-router-dom";
import './PropertyDetail.css';

const PropertyDetail = ({ selectedProperty }) => {
    const navigate = useNavigate();
    
    return (
        <div className="container">
            <h3 className="selPropName">{selectedProperty.name}</h3>
            <p className="selPropAddress">Address: {selectedProperty.location}</p>
            <p className="selPropFlats">Apartments: {selectedProperty.apartments}</p>
            <Link to={`/properties/${selectedProperty._id}/edit`}>
                <button className="btn btn-info update-btn">Update Property?</button>
            </Link>
            {/* <button onClick={() => handlePropDeleteConfirmation(selectedProperty._id)}>Delete Property?</button> */}
            <Link to={`/properties/${selectedProperty._id}/delete`}>
                <button className="btn btn-warning deleteBtn">Delete Property?</button>
            </Link>
            <button className="btn btn-dark backBtn" onClick={() => navigate('/properties')}>Back to Properties</button>
        </div>
    )
};

export default PropertyDetail;