import React from 'react';
import { ArrowDownUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Fragment } from 'react';

const TrackNumberButton = () => {
  return (
    <>
      <div className="track-num" role="button" aria-label="Sort by Track Number">
        <ArrowDownUp className="track-icon" />
        Track Number
        <ChevronDown className="chevron-down-track" />
      </div>
    </>
  );
};

export default TrackNumberButton;
