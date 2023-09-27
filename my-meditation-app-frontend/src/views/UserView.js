import React from 'react';
import MeditationList from '../components/MeditationList';

const UserView = ({ meditations }) => {
  return (
    <div>
      <h1>Available Meditations</h1>
      <MeditationList meditations={meditations} />
    </div>
  );
};

export default UserView;
