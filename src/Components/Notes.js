import React from 'react'
import { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'

const Notes = () => {
    const context = useContext(noteContext)
    const { notes, getNote } = context;
    useEffect(() => {
      getNote();
    }, [])
    
    return (
        <div>
            <AddNote/>
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />;
                })}
            </div>
        </div>
    )
}

export default Notes