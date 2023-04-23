import React from 'react'

export default function Card({ src, alt, title}) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <div className="card-name">
        <p>{title}</p>
        <p className="batton">→</p>
      </div>
    </div>
  );
}
