import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    subjek: '',
    pesan: ''
  });
  const [listPesan, setListPesan] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.nama.trim() === '' || formData.pesan.trim() === '') return;

    const dataBaru = { 
      ...formData, 
      id: Date.now(),
      waktu: new Date().toLocaleString('id-ID')
    };
    
    setListPesan([dataBaru, ...listPesan]);
    setFormData({ nama: '', email: '', subjek: '', pesan: '' });
  };

  return (
    <div className="contact-form-container">
      <div className="form-card">
        <h2 className="form-title">Kirim Pesan kepada Kami</h2>
        <p className="form-subtitle">Tim support kami akan membalas dalam 1x24 jam</p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nama" className="form-label">Nama Lengkap</label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama Anda"
                className="form-input"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="email@contoh.com"
                className="form-input"
              />
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="subjek" className="form-label">Subjek</label>
            <input
              type="text"
              id="subjek"
              name="subjek"
              value={formData.subjek}
              onChange={handleChange}
              placeholder="Subjek pesan"
              className="form-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="pesan" className="form-label">Pesan</label>
            <textarea
              id="pesan"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              placeholder="Tulis pesan Anda..."
              className="form-textarea"
              rows="5"
              required
            ></textarea>
          </div>
          
          <button type="submit" className="form-submit-btn">
            <span className="btn-icon">✉️</span>
            Kirim Pesan
          </button>
        </form>
      </div>
      
      {listPesan.length > 0 && (
        <div className="messages-container">
          <h3>Pesan Terbaru</h3>
          <div className="messages-list">
            {listPesan.map((item) => (
              <div key={item.id} className="message-item">
                <div className="message-header">
                  <span className="sender-name">{item.nama}</span>
                  <span className="message-time">{item.waktu}</span>
                </div>
                {item.subjek && <p className="message-subject">{item.subjek}</p>}
                <p className="message-content">{item.pesan}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
