import React from 'react';

const FavTextBox = ({ title, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      onClick={handleClick} 
      style={{
        width: '500px',
        height: '40px',
        border: '1px solid #ccc',
        padding: '10px',
        borderRadius: '8px',
        margin: '25px',
        cursor: 'pointer',
        backgroundColor: '#f9f9f9',
        alignContent: 'center'
      }}
    >
      <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#333' }}>{title}</h3>
    </div>
  );
};

export default FavTextBox;