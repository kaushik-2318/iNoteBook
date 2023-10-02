import React, { useContext } from 'react'
import noteContext from '../Context/notes/noteContext';
import Notesitem from './Notesitem';

function Notes () {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div className='row my-4'>
    <h2>Your Note</h2>
    {notes.map((notes)=>{
      return <Notesitem note = {notes}/>;
    })}
    </div>
  )
}

export default Notes
