import React from 'react';
import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Halaman Tidak Ditemukan</h2>
        <p className="not-found-message">
          Maaf, halaman yang Anda cari tidak dapat ditemukan.
        </p>
        <Link to="/" className="back-home-btn">
          🏠 Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;