import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = 'http://localhost:5000';
  const notesInitial = []
  
  const [notes, setNotes] = useState(notesInitial)
  
  // Get all notes
  const getNote = async () => {
    // Add API call
    const response = await fetch(`${host}/api/notes/fetchall`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYTk5ZmY2NTFmZTVkOWIzYmRmN2MzIn0sImlhdCI6MTY3MzE4MTczMn0.NfTHhUnG0L2qFGG3oTA10cg1_T9SfVauc5IKHeQ28-k'
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);
    setNotes(json);
  }

  // Add a note
  const addNote = async (title, description, tag) => {
    // Add API call
    const response = await fetch(`${host}/api/notes/createnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYTk5ZmY2NTFmZTVkOWIzYmRmN2MzIn0sImlhdCI6MTY3MzE4MTczMn0.NfTHhUnG0L2qFGG3oTA10cg1_T9SfVauc5IKHeQ28-k '
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    });

    // const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log("Note has been added");
    let note = {
      "_id": "63db2669dace9697bccf38db",
      "user": "63ba99ff651fe5d9b3bdf7c3",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2023-02-02T02:56:41.487Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }

  // Edit a note
  const editNote = async (id, title, description, tag) => {
    // Add API call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYTk5ZmY2NTFmZTVkOWIzYmRmN2MzIn0sImlhdCI6MTY3MzE4MTczMn0.NfTHhUnG0L2qFGG3oTA10cg1_T9SfVauc5IKHeQ28-k'
      },
      body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
    });
    const json = response.json(); // parses JSON response into native JavaScript objects

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id===id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  }

  // Delete a note
  const deleteNote = async (id) => {
    // Add API call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNiYTk5ZmY2NTFmZTVkOWIzYmRmN2MzIn0sImlhdCI6MTY3MzE4MTczMn0.NfTHhUnG0L2qFGG3oTA10cg1_T9SfVauc5IKHeQ28-k'
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    console.log(json);

    const newNote = notes.filter((notes)=>{return notes._id!==id})
    setNotes(newNote);
  }

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, editNote, deleteNote, getNote }}>
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;