import React from 'react';
import SongRow from './SongRow';

const SongList = ({ songs }) => {
  return <SongRow songs={songs} />;
};

export default SongList;
