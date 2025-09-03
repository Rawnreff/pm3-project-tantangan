import "./Testimoni.css";

function Testimoni({ nama, isiTestimoni }) {
  return (
    <div className="testimoni">
      <blockquote className="quote-box">
        <p className="isi-testimoni">"{isiTestimoni}"</p>
      </blockquote>
      <p className="nama-testimoni">- {nama}</p>
    </div>
  );
}

export default Testimoni;