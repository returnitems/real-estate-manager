import { useEffect, useState } from "react"

const UpdatePropertyForm = ({ selectedProperty, handleUpdateProperty }) => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        location: "",
        apartments: "",
    });

    useEffect(() => {
        if (selectedProperty) {
            setFormData({
                name: selectedProperty.name,
                price: selectedProperty.price,
                location: selectedProperty.location,
                apartments: selectedProperty.apartments,
            });
        }
    }, [selectedProperty]);

    const handleUpdate = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdateProperty(formData, selectedProperty._id);
    };

    return (
        <div>
            <h4>Update Property</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Property Name</label>
                <input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleUpdate}
                required 
                />

                <label htmlFor="price">Price of Property</label>
                <input 
                id="price"
                name="price"
                value={formData.price}
                onChange={handleUpdate}
                required
                />

                <label htmlFor="location">Address of Property</label>
                <input 
                id="location"
                name="location"
                value={formData.location}
                onChange={handleUpdate}
                required
                />

                <label htmlFor="apartments">Number of Apartments</label>
                <input
                id="apartments"
                name="apartments"
                value={formData.apartments}
                onChange={handleUpdate}
                required
                />
                <button type="submit">Add Property</button>
            </form>
        </div>
    )
};

export default UpdatePropertyForm;