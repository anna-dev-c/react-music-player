import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MusicUploadForm from '../components/MusicUploadForm';

describe('MusicUploadForm', () => {
  const mockSetSongs = jest.fn();

  it('does not allow upload when no file is selected', () => {
    render(<MusicUploadForm setSongs={mockSetSongs} />);
    const uploadButton = screen.getByText('Upload');
    fireEvent.click(uploadButton);
    expect(mockSetSongs).not.toHaveBeenCalled();
  });
});
