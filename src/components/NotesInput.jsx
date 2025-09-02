import React, { useState } from 'react';

function NotesInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const maxTitleLength = 50;

  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    if (newTitle.length <= maxTitleLength) {
      setTitle(newTitle);
    }
  };

  const onBodyChange = (event) => {
    setBody(event.target.value);
  };

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    if (title.trim() && body.trim()) {
      addNote({ title: title.trim(), body: body.trim() });
      setTitle('');
      setBody('');
    }
  };

  const remainingChars = React.useMemo(() => maxTitleLength - title.length, [title]);

  return (
    <div className="notes-input">
      <h2>Buat Catatan Baru</h2>
      <form className="notes-input__form" onSubmit={onSubmitEventHandler}>
        <div className="notes-input__title-wrapper">
          <input
            className="notes-input__title"
            type="text"
            placeholder="Judul catatan..."
            value={title}
            onChange={onTitleChange}
            required
          />
          <p className="notes-input__title-char-limit">
            Sisa karakter: {remainingChars}
          </p>
        </div>
        <textarea
          className="notes-input__body"
          placeholder="Tulis catatanmu di sini..."
          value={body}
          onChange={onBodyChange}
          required
        />
        <button className="notes-input__submit" type="submit">
          ➕ Tambah Catatan
        </button>
      </form>
    </div>
  );
}

export default NotesInput;