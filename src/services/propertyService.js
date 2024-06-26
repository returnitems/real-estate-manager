const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/properties`;


const index = async () => {
    try {
        const res = await fetch(BASE_URL);
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


const create = async (FormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FormData)
        });
        return res.json()
    } catch (error) {
        console.log(error);
    }
};


const update = async (FormData, propertyId) => {
    try {
        const res = await fetch(`${BASE_URL}/${propertyId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FormData)
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


const remove = async (propertyId) => {
    try {
        const res = await fetch(`${BASE_URL}/${propertyId}`, {
            method: 'DELETE',
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


// const addResidentToApartment = async (propertyId, apartmentId, residentData) => {
//     try {
//         const res = await fetch(`${BASE_URL}/${propertyId}/apartments/${apartmentId}/residents`, {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(residentData),
//         });
//         return res.json();
//     } catch (error) {
//         console.log(error);
//     }
// };


export { index, create, update, remove };