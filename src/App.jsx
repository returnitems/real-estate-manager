import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import * as propertyService from "./services/propertyService.js";
// import * as residentService from "./services/residentService.js";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Properties from "./components/Properties/Properties.jsx";
import PropertyForm from "./components/Properties/PropertyForm.jsx";
import PropertyDetail from "./components/Properties/PropertyDetail.jsx";
import UpdatePropertyForm from "./components/Properties/UpdatePropertyForm.jsx";
import PropertyDeleteConf from "./components/Properties/PropertyDeleteConf.jsx";
// import Residents from "./components/Residents/Residents.jsx";
// import ResidentDetail from "./components/Residents/ResidentDetail.jsx";


const App = () => {
  // const [view, setView] = useState('home');
  const [propertyList, setPropertyList] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  // const [selectedResident, setSelectedResident] = useState(null);
  const navigate = useNavigate();



  const fetchProperties = async () => {
    try {
      const properties = await propertyService.index();
      if (!properties) {
        throw new Error("No properties found.");
      }
      setPropertyList(properties);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleAddProperty = async (FormData) => {
    try {
      const newProperty = await propertyService.create(FormData)
      if (newProperty.error) {
        throw new Error(newProperty.error)
      }
      setPropertyList([newProperty, ...propertyList]);
      // setView('properties');
      navigate('/properties');
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateProperty = async (FormData, propertyId) => {
    try {
      const updateProperty = await propertyService.update(FormData, propertyId);
      if (updateProperty.error) {
        throw new Error(updateProperty.error)
      }
      setPropertyList(propertyList.map((property) => (property._id === propertyId ? updateProperty : property)));
      setSelectedProperty(updateProperty);
      // setView('propdetails');
      navigate('/properties/' + propertyId);
    } catch (error) {
      console.log(error);
    }
  };

  // const handlePropDeleteConfirmation = () => {
  //   setView('deleteprop');
  // };

  const handleDeleteProperty = async (propertyId) => {
    try {
      const deleteProperty = await propertyService.remove(propertyId);
      if (deleteProperty.error) {
        throw new Error(deleteProperty.error)
      }
      setPropertyList(propertyList.filter((property) => property._id !== propertyId));
      setSelectedProperty(null);
      // setView('properties');
      navigate('/properties');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Navbar />
      {/* {view === 'home' && (
        <Homepage />
      )}
      {view === 'properties' && (
        <Properties setView={setView} propertyList={propertyList} setSelectedProperty={setSelectedProperty} />
      )}
      {view === 'addprop' && (
        <PropertyForm handleAddProperty={handleAddProperty} />
      )}
      {view === 'propdetails' && (
        <PropertyDetail setView={setView} selectedProperty={selectedProperty} handlePropDeleteConfirmation={handlePropDeleteConfirmation} />
      )}
      {view === 'updateprop' && (
        <UpdatePropertyForm selectedProperty={selectedProperty} handleUpdateProperty={handleUpdateProperty} />
      )}
      {view === 'deleteprop' && (
        <PropertyDeleteConf setView={setView} selectedProperty={selectedProperty} handleDeleteProperty={handleDeleteProperty} />
      )} */}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/properties"
          element={<Properties propertyList={propertyList} setSelectedProperty={setSelectedProperty}/>}
        />
        <Route
          path="/properties/new"
          element={<PropertyForm handleAddProperty={handleAddProperty} />}
        />
        <Route
          path="/properties/:id"
          element={<PropertyDetail selectedProperty={selectedProperty} />}
        />
        <Route
          path="/properties/:id/edit"
          element={
            <UpdatePropertyForm
              selectedProperty={selectedProperty}
              handleUpdateProperty={handleUpdateProperty}
            />
          }
        />
        <Route
          path="/properties/:id/delete"
          element={
            <PropertyDeleteConf
              selectedProperty={selectedProperty}
              handleDeleteProperty={handleDeleteProperty}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;