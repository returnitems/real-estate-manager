import { useNavigate } from "react-router-dom";

const PropertyDeleteConf = ({ selectedProperty, handleDeleteProperty }) => {
    const navigate = useNavigate();
    
    return (
        <div>
            <h2>Are you sure you want to delete "{selectedProperty.name}"?</h2>
            <button onClick={() => handleDeleteProperty(selectedProperty._id)}>Delete</button>
            {/* <button onClick={() => setView('propdetails')}>Cancel</button> */}
            <button onClick={() => navigate(`/properties/${selectedProperty._id}`)}>Cancel Delete</button>
        </div>
    );
};

export default PropertyDeleteConf;