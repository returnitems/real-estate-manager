import { useState } from "react";
import * as propertyService from "./services/propertyService.js";
import * as residentService from "./services/residentService.js";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./components/Homepage/Homepage";
import Properties from "./components/Properties/Properties.jsx";
import PropertyDetail from "./components/Properties/PropertyDetail.jsx";
import Residents from "./components/Residents/Residents.jsx";

const App = () => {
  const [view, setView] = useState('home');
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedResident, setSelectedResident] = useState(null);

  return (
    <>
      <Navbar setView={setView} />
      {view === 'home' && (
        <Homepage />
      )}
      {view === 'properties' && (
        <Properties setView={setView} propertyService={propertyService} setSelectedProperty={setSelectedProperty} />
      )}
      {view === 'propdetails' && (
        <PropertyDetail />
      )}
      {view === 'residents' && (
        <Residents setView={setView} residentService={residentService} setSelectedResident={setSelectedResident} />
      )}
    </>
  )
};

export default App;