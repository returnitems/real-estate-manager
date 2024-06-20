import { useEffect, useState } from "react"
import './UpdatePropertyForm.css';

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
      <div className="container">
        <h4 className="update-heading">Update Property Form</h4>
        <hr />
        <form className="update-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">
            Property Name
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleUpdate}
            required
            className="form-control"
          />

          <label htmlFor="price" className="form-label">
            Price of Property
          </label>
          <input
            id="price"
            name="price"
            value={formData.price}
            onChange={handleUpdate}
            required
            className="form-control"
          />

          <label htmlFor="location" className="form-label">
            Address of Property
          </label>
          <input
            id="location"
            name="location"
            value={formData.location}
            onChange={handleUpdate}
            required
            className="form-control"
          />

          <label htmlFor="apartments" className="form-label">
            Number of Apartments
          </label>
          <input
            id="apartments"
            name="apartments"
            value={formData.apartments}
            onChange={handleUpdate}
            required
            className="form-control"
          />
          <button className="btn btn-info" type="submit">
            Update Property
          </button>
        </form>
      </div>
    );
};

export default UpdatePropertyForm;