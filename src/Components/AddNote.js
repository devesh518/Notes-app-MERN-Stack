import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext';

const AddNote = () => {
  const context = useContext(noteContext)
  const { addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: "default"})

  const handleClick = (event) => {
    event.preventDefault();
    addNote(note.title, note.description, note.tag);
  }

  const onChange = (event) => {
    setNote({...note, [event.target.name]: event.target.value})
  }

  return (
    <div>
      <form action="">
        <h1>Add a note</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" name='title' placeholder="" onChange={onChange}/>
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Write your note here</label>
          <textarea className="form-control" id="description" name='description' rows="3" onChange={onChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" name='tag' placeholder="" onChange={onChange}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add note</button>
      </form>

    </div>
  )
}

export default AddNote