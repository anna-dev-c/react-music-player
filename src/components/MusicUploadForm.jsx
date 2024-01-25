import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

function MusicUploadForm({ setSongs }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && !file.type.startsWith('audio/')) {
      setUploadError('Please, upload only audio file types!');
      return;
    }

    setSelectedFile(file);
    setUploadProgress(0);
    setUploadError(null);
  };

  const handleUpload = () => {
    if (uploadError) {
      return;
    }

    setIsUploading(true);
    setUploadError(null);

    //  Mock upload progress
    const interval = setInterval(() => {
      setUploadProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(interval);
          setIsUploading(false);

          return 100;
        }

        return Math.min(prevProgress + 10, 100);
      });
    }, 500);

    console.log('Uploading the file!');

    setSongs((prev) => [
      ...prev,
      {
        songName: selectedFile.name,
        artistName: 'edit_artistName',
        trackNumber: Math.floor(Math.random() * 10 * 1000),
        file: '',
      },
    ]);
  };

  return (
    <div className="music-upload-form" role="form" aria-labelledby="music-upload-form-title">
      <div className="choose-file">
        <input
          id="file-upload"
          type="file"
          accept=".mp3, .wav, audio/*"
          onChange={handleFileChange}
          aria-describedby="file-upload-description"
        />

        <div id="file-upload-description" style={{ position: 'absolute', left: '-9999px', top: '-9999px' }}>
          File types accepted: MP3, WAV, and other audio formats
        </div>
      </div>

      <div className="selected-file">{selectedFile && <div>File selected: {selectedFile.name}</div>}</div>

      {isUploading && (
        <div className="loading" aria-live="polite" aria-busy="true">
          <p>Uploading: {uploadProgress}% </p>
          <div className="loader"></div>
        </div>
      )}

      {uploadError && <div className="upload-error">{uploadError}</div>}

      <button
        className="music-upload-btn"
        onClick={handleUpload}
        disabled={!selectedFile || isUploading || uploadError}
        aria-disabled={!selectedFile || isUploading || uploadError}
      >
        <UploadCloud />
        Upload
      </button>
    </div>
  );
}

export default MusicUploadForm;
