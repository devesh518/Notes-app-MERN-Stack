import React from 'react'
import { Link } from 'react-router-dom';

const NoteItem = (props) => {
    const {note} = props;
    return (
        <div className='col-md-3'>
            <div class="card my-3" style={{width: '18rem'}}>
                <div class="card-body">
                    <h5 class="card-title">{note.title}</h5>
                    <p class="card-text">{note.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet atque harum expedita ducimus consequatur voluptas mollitia consequuntur numquam aperiam adipisci.</p>
                    <Link to="#" class="btn btn-primary">Edit note</Link>
                </div>
            </div>
        </div>
    )
}

export default NoteItem