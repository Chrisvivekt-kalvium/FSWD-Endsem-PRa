import { useState } from 'react'
import NoteForm from './components/noteForm'
import NoteList from './components/noteList'

import './App.css'

function App() {
  const [notes,setNotes] = useState([])
  const [editNote, setEditNote] = useState(null)

  const addNote = (note) => {
    if(editNote) {
      setNotes(notes.map(n => (n.id === editNote.id ? {...note,id: editNote.id} : n))) 
      setEditNote(null);
    }else{
      setNotes([...notes, {...note,id: Date.now()}]);
    }
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  const handleEdit = (n) => {
    setEditNote(n);
  };

  return (
  <div>
    <h1>Note Taking</h1>
    <NoteForm onsubmit={addNote} editNote={editNote}/>
    <NoteList notes={notes} onEdit={handleEdit} onDelete={deleteNote}/>
  </div>  
  
  )
}

export default App
