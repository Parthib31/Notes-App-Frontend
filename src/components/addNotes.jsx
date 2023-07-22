import React, { useState } from "react";
import SendIcon from '@mui/icons-material/Send';
import Fab from '@mui/material/Fab';
import { addNotes } from "../Api/api";
import {useNavigate} from "react-router-dom"

export const AddNotes = () => {

  const [newNote, setNewNote] = useState({title:"", note:""});
  const navigate = useNavigate();
  const handleChange = async(event) => {
    const {name, value} = event.target;
    setNewNote(prevNote => {
      return {...prevNote,
      [name] : value};
    })
  }

  const handleClick = async(e)=>{
    try{
      await addNotes(newNote);
      navigate("/");
    }catch(err){
      console.error(err);
    }
  }
  
  return (
      <div className="container">
        <div className="user-input">
          <input
            onChange={handleChange}
            type="text"
            id="title"
            name="title"
            placeholder="Add title of your note"
            value={newNote.title}
          />
        </div>
        <div className="user-input">
          <textarea
            onChange={handleChange}
            id="description"
            name="note"
            placeholder="Write your note here"
            rows={5}
            value={newNote.note}
          />
        </div>
        <Fab onClick={() => handleClick()}>
          <SendIcon/>
        </Fab>
      </div>
  );
}
