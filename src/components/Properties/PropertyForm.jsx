import { useState } from "react"

const PropertyForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        price: "",
        location: "",
        apartments: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return (
        <div>
            <h4>Add a new property</h4>
            <hr />
            <form >
                <label htmlFor="name">Property Name</label>
                <input 
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
                />

                <label htmlFor="price">Price of Property</label>
                <input  />
            </form>
        </div>
    )
}