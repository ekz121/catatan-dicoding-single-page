import React from 'react';
import NotesItem from './NotesItem.jsx';

function NotesList({ notes, emptyMessage }) {
  if (!notes || notes.length === 0) {
    return (
      <div className="notes-list-empty">
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="notes-list">
      {notes.map((note) => (
        <NotesItem
          key={note.id}
          note={note}
        />
      ))}
    </div>
  );
}

export default NotesList;