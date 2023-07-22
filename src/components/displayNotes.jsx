import React, {useState, useEffect} from "react"; 
import DeleteIcon from '@mui/icons-material/Delete'; 
import { deleteNotes, getNotes } from "../Api/api";
import { Link } from "react-router-dom";
import EditIcon from '@mui/icons-material/Edit';
import { Button } from "@mui/material";
import Search from "./searchBar";

export const DisplayNotes = () => {
  const [note, setNote] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(()=>{
    getAllNotes();
  }, []);

  const getAllNotes = async()=>{
    let res = await getNotes();
    setNote(res.data);
  }

  const deleteItem = async(id) => {
    await deleteNotes(id);
    getAllNotes();
  }
  
  const searchedNotes = note.filter((eachNote) =>
    eachNote.title.toLowerCase().includes(searchText)
  );

  return(
    <div>    
    <Search handleSearchNote={setSearchText}/>
    {searchedNotes.map((eachNote)=>
    {
      return(
        <div className="items">
          <h2>{eachNote.title}</h2>
          <p>{eachNote.note}</p>
          <div className="deleteItem">
            <Button onClick={async() => deleteItem(eachNote._id)} id="deleteBtn"><DeleteIcon /></Button>
            <Button id = "editBtn" component = {Link} to = {`/edit/${eachNote._id}`} ><EditIcon/></Button>
          </div>
        </div>
        
      )
    })
    }    
    </div>
  )
}