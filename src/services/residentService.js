const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/residents`;


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


const update = async (FormData, residentId) => {
    try {
        const res = await fetch(`${BASE_URL}/${residentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(FormData)
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


const remove = async (residentId) => {
    try {
        const res = await fetch(`${BASE_URL}/${residentId}`, {
            method: 'DELETE',
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


export { index, create, update, remove };