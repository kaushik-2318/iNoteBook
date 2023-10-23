import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

function Notesitem(props) {
  const context = useContext(noteContext);
  const {deleteNote} = context;
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
            <i className="ri-delete-bin-fill mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="ri-edit-2-fill mx-2"></i>
          </div>
          <p className="card-text">{note.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Notesitem;
