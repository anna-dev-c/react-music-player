import React from 'react';
import { Grip } from 'lucide-react';
import { Play } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Check } from 'lucide-react';
import { Forward } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const SongRow = ({ song }) => {
  return (
    <tr key={song.trackNumber}>
      {/* Each row has a unique 'key' prop */}
      <td>
        <Grip aria-hidden="true" style={{ marginRight: '10px' }} />
        <Play aria-hidden="true" fill={'#666666'} />
      </td>
      <td>{song.songName}</td>
      <td>{song.artistName}</td>
      <td>{song.trackNumber}</td>
      <td>
        {/* Icons for various actions with styling */}
        <Heart aria-hidden="true" style={{ marginRight: '10px' }} fill={'#666666'} />
        <Check aria-hidden="true" style={{ marginRight: '10px' }} />
        <Forward aria-hidden="true" style={{ marginRight: '10px' }} />
        <ChevronDown aria-hidden="true" />
      </td>
    </tr>
  );
};

export default SongRow;
