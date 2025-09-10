import React from 'react';
import './Testimoni.css';

const Testimoni = ({ nama, isiTestimoni }) => {
  return (
    <div className="testimoni-card">
      <p className="testimoni-text">"{isiTestimoni}"</p>
      <p className="testimoni-nama">- {nama}</p>
    </div>
  );
};

export default Testimoni;