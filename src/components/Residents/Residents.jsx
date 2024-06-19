import { useEffect, useState } from "react";

const Residents = ({ setView, residentService, setSelectedResident }) => {
    const [residentList, setResidentList] = useState([]);

    const handleClick = (event, resident) => {
        event.preventDefault();
        setSelectedResident(resident);
        setView('resdetails');
    };

    useEffect(() => {
        const fetchResidents = async () => {
            try {
                const residents = await residentService.index();
                if (!residents) {
                    throw new Error('No residents found.');
                }
                setResidentList(residents);
            } catch (error) {
                console.log(error);
            }
        }
        fetchResidents();
    }, []);

    return (
        <div>
            {residentList.map((resident) => (
                <div key={resident._id} onClick={(event) => handleClick(event, resident)}>
                    <h4>{resident.name}</h4>
                </div>
            ))}
        </div>
    )
};

export default Residents;