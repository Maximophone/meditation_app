import React from 'react';
import MeditationItem from './MeditationItem';

const MeditationList = ({ meditations }) => {
  return (
    <div>
      {meditations.map((m) => <MeditationItem key={m.id} meditation={m} />)}
    </div>
  );
};

export default MeditationList;