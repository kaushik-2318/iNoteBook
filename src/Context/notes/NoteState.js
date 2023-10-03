import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      "_id": "61322f19553781a8ca8d0e06",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.509Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
    {
      "_id": "61322f19553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": "My Title",
      "description": "Please wake up early",
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    },
  ]

      const [notes, setNotes] = useState(notesInitial)
   
      //ADD a note
      const addnote = (title, description, tag) =>{
        //TODO API CALL
        console.log("Adding a new Note")
        const note = {
          "_id": "6121322f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }

      //Delete a note
      const deletenote = () =>{

      }

      //Edit a note
      const editnote = () =>{

      }

      return(
      <NoteContext.Provider value={{notes, addnote, deletenote, editnote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;