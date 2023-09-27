import React from 'react';
import '../styles/MeditationItem.css';

const MeditationItem = ({ meditation }) => {
  return (
    <div>
      <img src={meditation.image} alt={meditation.title} width={50} />
      <h3>{meditation.title}</h3>
      <audio controls>
        <source src={meditation.audio} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default MeditationItem;
