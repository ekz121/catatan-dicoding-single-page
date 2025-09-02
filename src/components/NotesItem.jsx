import React from 'react';
import { Link } from 'react-router-dom';
import { showFormattedDate } from '../utils/index.js';

function NotesItem({ note }) {
  if (!note) return null;
  
  return (
    <Link to={`/notes/${note.id}`} className="notes-item">
      <div className="notes-item__content">
        <h3 className="notes-item__title">{note.title || ''}</h3>
        <p className="notes-item__date">{note.createdAt ? showFormattedDate(note.createdAt) : ''}</p>
        <p className="notes-item__body">{note.body || ''}</p>
      </div>
    </Link>
  );
}

export default NotesItem;