import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";
import Notesitem from "./Notesitem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(noteContext);
  const { notes, addnote } = context;
  return (
    <>
      <AddNote />
      <div className="row my-4">
        <h2>Your Note</h2>
        {notes.map((notes) => {
          return <Notesitem key={notes._id} note={notes} />;
        })}
      </div>
    </>
  );
}

export default Notes;
