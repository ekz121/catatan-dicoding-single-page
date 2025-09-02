import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data.js';
import { showFormattedDate } from '../utils/index.js';
import parser from 'html-react-parser';

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = useState(null);

  useEffect(() => {
    const foundNote = getNote(id);
    if (foundNote) {
      setNote(foundNote);
    } else {
      navigate('/404');
    }
  }, [id, navigate]);

  const onDelete = () => {
    deleteNote(id);
    navigate('/');
  };

  const onToggleArchive = () => {
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    navigate('/');
  };

  if (!note) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="detail-page">
      <div className="detail-page__header">
        <Link to="/" className="back-btn">← Kembali</Link>
        <div className="detail-page__actions">
          <button 
            className="action-btn archive-btn" 
            onClick={onToggleArchive}
          >
            {note.archived ? '📤 Pindahkan' : '📥 Arsipkan'}
          </button>
          <button 
            className="action-btn delete-btn" 
            onClick={onDelete}
          >
            🗑️ Hapus
          </button>
        </div>
      </div>
      
      <div className="detail-page__body">
        <h1 className="detail-page__title">{note.title}</h1>
        <p className="detail-page__date">{showFormattedDate(note.createdAt)}</p>
        <div className="detail-page__content">
          {typeof note.body === 'string' && note.body.includes('<') 
            ? parser(note.body) 
            : <p>{note.body}</p>
          }
        </div>
      </div>
    </div>
  );
}

export default DetailPage;