import React from 'react';
import { render, screen } from '@testing-library/react';
import SongList from '../components/SongList';

describe('SongList', () => {
  const mockSongs = [
    { songName: 'Song One', artistName: 'Artist One', trackNumber: 1 },
    { songName: 'Song Two', artistName: 'Artist Two', trackNumber: 2 },
  ];

  it('should render a row for each song', () => {
    render(<SongList songs={mockSongs} />);

    expect(screen.getByText('Song One')).toBeInTheDocument();
    expect(screen.getByText('Artist One')).toBeInTheDocument();
    expect(screen.getByText('Song Two')).toBeInTheDocument();
    expect(screen.getByText('Artist Two')).toBeInTheDocument();
  });

  it('should display the correct number of rows', () => {
    render(<SongList songs={mockSongs} />);

    const rows = screen.getAllByRole('row');
    // +1 for the header row
    expect(rows).toHaveLength(mockSongs.length + 1);
  });
});
