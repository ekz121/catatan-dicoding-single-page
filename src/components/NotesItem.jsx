import React from 'react';
import { showFormattedDate } from '../utils/index.js';

function NotesItem({ note, onDelete, onToggleArchive }) {
  if (!note) return null;
  
  return (
    <div className="notes-item">
      <div className="notes-item__content">
        <h3 className="notes-item__title">{note.title || ''}</h3>
        <p className="notes-item__date">{note.createdAt ? showFormattedDate(note.createdAt) : ''}</p>
        <p className="notes-item__body">{note.body || ''}</p>
      </div>
      <div className="notes-item__actions">
        <button
          className="notes-item__delete-button"
          onClick={() => onDelete(note.id)}
          title="Hapus catatan"
        >
          🗑️
        </button>
        <button
          className="notes-item__archive-button"
          onClick={() => onToggleArchive(note.id)}
          title={note.archived ? "Pindahkan ke aktif" : "Arsipkan"}
        >
          {note.archived ? '📤' : '📥'}
        </button>
      </div>
    </div>
  );
}

export default NotesItem;