import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Notes from './Notes';
import CreateArea from './CreateArea';

function App() {

  const [mode , setMode] = useState("light");
  const [arrayNote, setArrayNote] = useState([]);

  // Load saved notes from local storage when the component mounts
  useEffect(() => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      setArrayNote(JSON.parse(savedNotes));
    }
  }, []);

  // Save notes to local storage whenever the arrayNote state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(arrayNote));
  }, [arrayNote]);

  function addNote(note) {
    // console.log(note); to check if the value from the CreateArea is go to the this function
    setArrayNote(prevValue => {
      return [...prevValue, note]
    });

  }

  function deleteNote(id) {
    // console.log("delete is clicked");
    setArrayNote(prevNotes => {
      return prevNotes.filter((arrayNote, index) => {
        return index !== id;
      })
    })
  }

  function handleMode() {
    // console.log("mode is changed");
    if(mode === "light") {
      setMode("dark");
      document.body.style.background = "#12132d";
    }
    else{
      setMode("light");
      document.body.style.background = "#eee";
    }
  }

  return(
  <>
  <Heading modeStyle={handleMode} mode={mode} />
  <CreateArea onAdd={addNote} mode={mode} />
  <div className="container">
    {
      arrayNote.map((element, index) => (
        <Notes key={index} id={index} title={element.title} content={element.content} onDelete={deleteNote} mode={mode} />
      ))
    }
  </div>
  <Footer mode={mode} />
  </>
  )
}

export default App;
