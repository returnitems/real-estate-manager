const PropertyDeleteConf = ({ setView, selectedProperty, handleDeleteProperty }) => {
    return (
        <div>
            <h2>Are you sure you want to delete "{selectedProperty.name}"?</h2>
            <button onClick={() => handleDeleteProperty(selectedProperty._id)}>Delete</button>
            <button onClick={() => setView('propdetails')}>Cancel</button>
        </div>
    );
};

export default PropertyDeleteConf;