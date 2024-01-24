import './App.css';
import PlayAllButton from './components/PlayAllButton';
import AddAllButton from './components/AddAllButton';
import TrackNumberButton from './components/TrackNumberButton';
import SearchButton from './components/SearchButton';

import SongList from './components/SongList';
import MusicUploadForm from './components/MusicUploadForm';
import { useState } from 'react';

function App() {
  const [songs, setSongs] = useState([
    {
      songName: 'Bohemian Rhapsody',
      artistName: 'Queen',
      trackNumber: 1,
      file: '',
    },
    {
      songName: 'Rolling in the Deep',
      artistName: 'Adele',
      trackNumber: 2,
      file: '',
    },
    {
      songName: 'Hotel California',
      artistName: 'Eagles',
      trackNumber: 3,
      file: '',
    },
    {
      songName: 'Stairway to Heaven',
      artistName: 'Led Zeppelin',
      trackNumber: 4,
      file: '',
    },
    {
      songName: 'Wonderwall',
      artistName: 'Oasis',
      trackNumber: 5,
      file: '',
    },
    {
      songName: 'Billie Jean',
      artistName: 'Michael Jackson',
      trackNumber: 6,
      file: '',
    },
    {
      songName: 'Shape of You',
      artistName: 'Ed Sheeran',
      trackNumber: 7,
      file: '',
    },
    {
      songName: 'Like a Rolling Stone',
      artistName: 'Bob Dylan',
      trackNumber: 8,
      file: '',
    },
    {
      songName: 'Imagine',
      artistName: 'John Lennon',
      trackNumber: 9,
      file: '',
    },
    {
      songName: 'Uptown Funk',
      artistName: 'Mark Ronson ft. Bruno Mars',
      trackNumber: 10,
      file: '',
    },
  ]);

  return (
    <div className="app">
      <div className="header">
        <div className="start">
          <PlayAllButton />
          <AddAllButton />
        </div>
        <div className="end">
          <TrackNumberButton />
          <SearchButton />
        </div>
      </div>
      <SongList songs={songs} />
      <MusicUploadForm setSongs={setSongs} />
    </div>
  );
}

export default App;
