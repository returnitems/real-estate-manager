import { useNavigate } from "react-router-dom";
import "./PropertyDeleteConf.css";

const PropertyDeleteConf = ({ selectedProperty, handleDeleteProperty }) => {
    const navigate = useNavigate();
    
    return (
        <div className="container">
            <h2 className="delete-confirmation">Are you sure you want to delete "{selectedProperty.name}"?</h2>
            <button className="btn btn-danger" onClick={() => handleDeleteProperty(selectedProperty._id)}>Delete</button>
            {/* <button onClick={() => setView('propdetails')}>Cancel</button> */}
            <button className="btn btn-success" onClick={() => navigate(`/properties/${selectedProperty._id}`)}>Cancel Delete</button>
        </div>
    );
};

export default PropertyDeleteConf;