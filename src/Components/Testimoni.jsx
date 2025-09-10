import React from 'react';
import './Testimoni.css';

const Testimoni = ({ nama, isiTestimoni, rating = 5 }) => {
  // Render bintang rating
  const renderRating = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={index < rating ? "star filled" : "star"}
      >
        {index < rating ? "★" : "☆"}
      </span>
    ));
  };

  return (
    <div className="testimonial-card">
      <div className="testimonial-content">
        <div className="testimonial-text">"{isiTestimoni}"</div>
        <div className="rating">{renderRating()}</div>
        <div className="testimonial-author">- {nama}</div>
      </div>
      <div className="testimonial-avatar">
        {nama.charAt(0).toUpperCase()}
      </div>
    </div>
  );
};

export default Testimoni;