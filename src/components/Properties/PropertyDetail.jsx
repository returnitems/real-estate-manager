const PropertyDetail = ({ setView, selectedProperty, handlePropDeleteConfirmation }) => {
    return (
        <div>
            <h3>{selectedProperty.name}</h3>
            <p>{selectedProperty.location}</p>
            <p>{selectedProperty.apartments}</p>
            <button onClick={() => setView('updateprop')}>Update Property?</button>
            <button onClick={() => handlePropDeleteConfirmation(selectedProperty._id)}>Delete Property?</button>
            <button onClick={() => setView('properties')}>Back to Properties</button>
        </div>
    )
};

export default PropertyDetail;