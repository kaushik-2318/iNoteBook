import React from "react";

function Notesitem(props) {
  const { note } = props;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="ri-delete-bin-fill"></i>
          <i className="ri-edit-2-fill mx-3"></i>
        </div>
      </div>
    </div>
  );
}

export default Notesitem;
