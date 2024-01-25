import React from 'react';
import SongRow from './SongRow';

const SongList = ({ songs }) => {
  return (
    <table aria-label="Songs Table">
      <thead>
        <tr>
          <th></th>
          <th>Song Name</th>
          <th>Artist Name</th>
          <th>Track</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {/* Map through the 'songs' array and return a table row for each song */}
        {songs.map((song) => (
          <SongRow key={song.songName} song={song} />
        ))}
      </tbody>
    </table>
  );
};

export default SongList;
