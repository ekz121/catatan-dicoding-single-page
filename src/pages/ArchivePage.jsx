import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getArchivedNotes } from '../utils/local-data.js';
import SearchBar from '../components/SearchBar.jsx';
import NotesList from '../components/NotesList.jsx';

function ArchivePage() {
  const [notes, setNotes] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  useEffect(() => {
    setNotes(getArchivedNotes());
  }, []);

  const onSearchChange = (keyword) => {
    setSearchParams(keyword ? { keyword } : {});
  };

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="notes-app__header-wrapper">
      <div className="notes-app__header">
        <h1>📝 Catatan Pribadi</h1>
        <nav className="notes-nav">
          <Link to="/" className="nav-link">Catatan Aktif</Link>
          <Link to="/archives" className="nav-link active">Arsip</Link>
          <Link to="/notes/new" className="nav-link add-btn">+ Tambah Catatan</Link>
        </nav>
        <SearchBar searchKeyword={keyword} onSearchChange={onSearchChange} />
      </div>
      
      <div className="notes-app__body">
        <section className="notes-section">
          <h2>Arsip Catatan</h2>
          <NotesList 
            notes={filteredNotes} 
            emptyMessage="Arsip kosong"
          />
        </section>
      </div>
    </div>
  );
}

export default ArchivePage;