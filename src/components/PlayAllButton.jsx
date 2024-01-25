import React from 'react';
import { Play } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const PlayAllButton = () => {
  return (
    <div className="play-all-btn" role="group" aria-label="Playback Controls">
      <button className="play-all" onClick={() => console.log("'Play All' button is clicked!")}>
        <div className="play-icon">
          <Play fill={'#333'} />
        </div>
        Play All
      </button>
      <button className="chevron-down" aria-label="More Options">
        <ChevronDown />
      </button>
    </div>
  );
};

export default PlayAllButton;
