import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data.js';

function AddPage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const onTitleChange = (event) => {
    if (event.target.value.length <= 50) {
      setTitle(event.target.value);
    }
  };

  const onBodyChange = (event) => {
    setBody(event.target.innerHTML);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addNote({ title, body });
    navigate('/');
  };

  return (
    <div className="add-new-page">
      <div className="add-new-page__header">
        <Link to="/" className="back-btn">← Kembali</Link>
        <h1>Tambah Catatan Baru</h1>
      </div>
      
      <div className="add-new-page__body">
        <form className="add-new-page__input" onSubmit={onSubmit}>
          <div className="add-new-page__input__title">
            <input
              className="add-new-page__input__title__input"
              type="text"
              placeholder="Judul catatan..."
              value={title}
              onChange={onTitleChange}
              required
            />
            <p className="add-new-page__input__title__char-limit">
              Sisa karakter: {50 - title.length}
            </p>
          </div>
          
          <div
            className="add-new-page__input__body"
            data-placeholder="Tulis catatanmu di sini..."
            contentEditable
            onInput={onBodyChange}
            suppressContentEditableWarning={true}
          />
          
          <div className="add-new-page__action">
            <button type="submit" className="action-btn save-btn">
              💾 Simpan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPage;