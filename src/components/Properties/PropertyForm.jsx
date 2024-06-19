import { useState } from "react"

const PropertyForm = ({ handleAddProperty }) => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        location: "",
        apartments: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddProperty(formData);
    };

    return (
        <div>
            <h4>Add a new property</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Property Name</label>
                <input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                />

                <label htmlFor="price">Price of Property</label>
                <input 
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
                />

                <label htmlFor="location">Address of Property</label>
                <input 
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                />

                <label htmlFor="apartments">Number of Apartments</label>
                <input
                id="apartments"
                name="apartments"
                value={formData.apartments}
                onChange={handleChange}
                required
                />
                <button type="submit">Add Property</button>
            </form>
        </div>
    )
};

export default PropertyForm;