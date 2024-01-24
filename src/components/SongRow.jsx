import React from 'react';
import { Grip } from 'lucide-react';
import { Play } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Check } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const SongRow = ({ songs }) => {
  return (
    <table>
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
          <tr key={song.trackNumber}>
            {/* Each row has a unique 'key' prop */}
            <td>
              <Grip style={{ marginRight: '10px' }} />
              <Play fill={'#666666'} />
            </td>
            <td>{song.songName}</td>
            <td>{song.artistName}</td>
            <td>{song.trackNumber}</td>
            <td>
              {/* Icons for various actions with styling */}
              <Heart style={{ marginRight: '10px' }} fill={'#666666'} />
              <Check style={{ marginRight: '10px' }} />
              <Forward style={{ marginRight: '10px' }} />
              <ChevronDown fill={'#666666'} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SongRow;
