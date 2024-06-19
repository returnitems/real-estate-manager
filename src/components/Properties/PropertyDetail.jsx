const PropertyDetail = ({ setView, selectedProperty }) => {
    return (
        <div>
            <h3>{selectedProperty.name}</h3>
            <p>{selectedProperty.location}</p>
            <p>{selectedProperty.apartments}</p>
        </div>
    )
};

export default PropertyDetail;