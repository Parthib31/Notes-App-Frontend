import React, {useState, useEffect} from "react";
import {Heading} from "./components/heading"
import Footer from "./components/footer"
import { AddNotes } from "./components/addNotes"
import { DisplayNotes } from "./components/displayNotes"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { EditNotes } from "./components/editNotes";

function App()
{
  
  return (
    <BrowserRouter>
       <Heading/>
       <Routes>
        <Route path = "/" element = {<DisplayNotes/>}/>
        <Route path = "/add" element = {<AddNotes/>}/>
        <Route path="/get" element = {<DisplayNotes/>}/>
        <Route path="/edit/:id" element = {<EditNotes/>} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;