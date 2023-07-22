import React, { useState, useEffect } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getNotes, editNotes } from '../Api/api';
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';

export const EditNotes = () => {    
    
    useEffect(()=>{
        loadPrevNote();
    }, []);

    const [updatedNote, setUpdatedNote] = useState([]);
    const {id} = useParams();
    const navigate = useNavigate();

    const loadPrevNote = async() => {
        const res = await getNotes(id);
        setUpdatedNote(res.data);
    }

    const editNote = async() => {
        await editNotes(id, updatedNote);
        navigate("/get");
    }

    const handleChange = async(event) => {
        const {name, value} = event.target;
        setUpdatedNote(prev => {
          return {...prev,
          [name] : value};
        })
      }

    return(
        <div className="container">
        <div className="user-input">
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            placeholder="Add title of your note"
            value={updatedNote.title}
          />
        </div>
        <div className="user-input">
          <textarea
            onChange={handleChange}
            id="description"
            name="note"
            placeholder="Write your note here"
            rows={5}
            value={updatedNote.note}
          />
        </div>
        <Fab onClick={() => editNote()}>
          <SendIcon/>
        </Fab>
      </div>
    );
}