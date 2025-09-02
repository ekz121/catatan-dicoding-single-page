import React, { useState } from 'react';
import { getInitialData } from '../utils/index.js';
import NotesList from './NotesList.jsx';
import NotesInput from './NotesInput.jsx';
import SearchBar from './SearchBar.jsx';

function PersonalNotesApp() {
  const [notes, setNotes] = useState(getInitialData());
  const [searchKeyword, setSearchKeyword] = useState('');

  const addNote = ({ title, body }) => {
    const newNote = {
      id: Date.now() + Math.random(),
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const toggleArchive = (id) => {
    setNotes(notes.map(note => 
      note.id === id ? { ...note, archived: !note.archived } : note
    ));
  };

  const { activeNotes, archivedNotes } = React.useMemo(() => {
    const filtered = notes.filter(note =>
      note.title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    return {
      activeNotes: filtered.filter(note => !note.archived),
      archivedNotes: filtered.filter(note => note.archived)
    };
  }, [notes, searchKeyword]);

  return (
    <div className="notes-app">
      <div className="notes-app__header">
        <h1>📝 Catatan Pribadi</h1>
        <SearchBar searchKeyword={searchKeyword} onSearchChange={setSearchKeyword} />
      </div>
      
      <div className="notes-app__body">
        <NotesInput addNote={addNote} />
        
        <div className="notes-sections">
          <section className="notes-section">
            <h2>Catatan Aktif</h2>
            <NotesList 
              notes={activeNotes} 
              onDelete={deleteNote} 
              onToggleArchive={toggleArchive}
              emptyMessage="Tidak ada catatan aktif"
            />
          </section>
          
          <section className="notes-section">
            <h2>Arsip</h2>
            <NotesList 
              notes={archivedNotes} 
              onDelete={deleteNote} 
              onToggleArchive={toggleArchive}
              emptyMessage="Tidak ada catatan diarsipkan"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default PersonalNotesApp;