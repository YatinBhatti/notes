import { useEffect, useState } from "react";
import NotesList from "./components/NotesList"
import {nanoid} from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";
const App=()=>{
  const[notes,setNotes]=useState([
    {
      id:nanoid(),
      text:"this is the first note",
      date:"10/11/22"
    },
    {
      id:nanoid(),
      text:"this is the second note",
      date:"12/11/22"
    },
    {
      id:nanoid(),
      text:"this is the third note",
      date:"14/11/22"
    },
  ]);
  const [searchText,setSearchText]=useState("");
  const[darkMode,setDarkMode]=useState(false);
  useEffect(()=>{
    const savedNotes=JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);
  useEffect(()=>{
      localStorage.setItem('react-notes-app-data',JSON.stringify(notes))
  },[notes]);
  const addNote=(text)=>{
    const date=new Date();
    const newNote={
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote];
    setNotes(newNotes);
  }
  const deleteNote=(id)=>{
    const newNotes=notes.filter((note)=>note.id!==id);
    setNotes(newNotes);
  }
return <div className={`${darkMode&&"dark-mode"}`}>
<div className="container">
<Header handleToggleDark={setDarkMode}/>
<Search handleSearchNote={setSearchText}/>
  <NotesList notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
</div>
</div>

}
export default App;