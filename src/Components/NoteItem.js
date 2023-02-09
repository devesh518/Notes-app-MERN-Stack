import React, { useContext } from 'react'
// import { Link } from 'react-router-dom';
import noteContext from '../Context/Notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, editNote } = context;
    const { note } = props;
    return (
        <div className='col-md-3'>
            <div className="card my-3" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet atque harum expedita ducimus consequatur voluptas mollitia consequuntur numquam aperiam adipisci.</p>

                    <button className="btn btn-primary" onClick={()=>{editNote(note._id, "HIHIHII", "RISHI GANDU", "default")}}>
                        <i className="fa-regular fa-pen-to-square mx-2"></i>Edit
                    </button>
                    <button className="btn btn-primary mx-2" onClick={()=>{deleteNote(note._id)}}>
                        <i className="fa-regular fa-trash-can mx-2"></i>Delete
                    </button>

                </div>
            </div>
        </div>
    )
}

export default NoteItem