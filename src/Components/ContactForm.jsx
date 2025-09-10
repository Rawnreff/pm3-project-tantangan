import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [nama, setNama] = useState('');
  const [pesan, setPesan] = useState('');
  const [listPesan, setListPesan] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama.trim() === '' || pesan.trim() === '') return;

    const dataBaru = { nama, pesan };
    setListPesan([...listPesan, dataBaru]);

    setNama('');
    setPesan('');
  };

  return (
    <div className="contact-container">
      <div className="form-card">
        <h2 className="form-title">Hubungi Kami</h2>
        <form onSubmit={handleSubmit} className="form-group">
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Anda"
            className="form-input"
          />
          <textarea
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            placeholder="Tulis pesan Anda..."
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-submit-btn">
            Kirim Pesan
          </button>
        </form>
      </div>
      <div className="pesan-list">
        <h3>Pesan Terbaru</h3>
        <ul>
          {listPesan.map((item, index) => (
            <li key={index}>
              <strong>{item.nama}:</strong> {item.pesan}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;