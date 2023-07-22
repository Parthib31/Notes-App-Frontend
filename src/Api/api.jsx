import axios from "axios";

const URL = "http://localhost:8000";

export const getNotes = async(id) => {
    id = id || ''
    try{
        return await axios.get(`${URL}/${id}`);
    }catch(err)
    {
        console.error(err);
    }
}

export const addNotes = async(note) => {
    try{
        return await axios.post(`${URL}/add`, note);
    }catch(err){
        console.error(err);
    }
}

export const deleteNotes = async(id) => {
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.error(error);
    }
}

export const editNotes = async(id, note) => {
    try {
        return await axios.put(`${URL}/${id}`, note);
    } catch (error) {
        console.error(error);
    }
}