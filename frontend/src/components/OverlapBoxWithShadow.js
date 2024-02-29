import React from 'react';
import './OverlapBoxWithShadow.css'; // Import your CSS file

function OverlapBoxWithShadow(prop) {
  return (
    <div className="name-container">
      <h1>John</h1>
      <div className="overlap-box"></div>
      <h1>Doe</h1>
    </div>
  );
}

export default OverlapBoxWithShadow;