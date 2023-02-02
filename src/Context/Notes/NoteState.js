import React from "react";
import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "63db2660dace9697bccf38d9",
          "user": "63ba99ff651fe5d9b3bdf7c3",
          "title": "hello",
          "description": "my name is lionel messi delete this note",
          "tag": "General",
          "date": "2023-02-02T02:56:32.165Z",
          "__v": 0
        },
        {
          "_id": "63db2669dace9697bccf38db",
          "user": "63ba99ff651fe5d9b3bdf7c3",
          "title": "hello",
          "description": "my name is lionel messi i have a world cup",
          "tag": "General",
          "date": "2023-02-02T02:56:41.487Z",
          "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)


    return(
        <NoteContext.Provider value = {{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;