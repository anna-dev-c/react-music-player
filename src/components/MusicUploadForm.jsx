import React, { useState } from 'react';
import { UploadCloud } from 'lucide-react';

function MusicUploadForm({ setSongs }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadProgress(0);
  };

  const handleUpload = () => {
    setIsUploading(true);

    // Mock upload progress
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
    console.log('🚀 ~ selectedFile:', selectedFile);
  };

  return (
    <div className="music-upload-form">
      <div className="choose-file">
        <input type="file" accept=".mp3, .wav, audio/*" onChange={handleFileChange} />
      </div>
      <div className="selected-file">{selectedFile && <div>File selected: {selectedFile.name}</div>}</div>

      {isUploading && (
        <div className="loading">
          <p>Uploading: {uploadProgress}% </p>
          <div className="loader"></div>
        </div>
      )}
      <button className="music-upload-btn" onClick={handleUpload} disabled={!selectedFile || isUploading}>
        <UploadCloud />
        Upload
      </button>
    </div>
  );
}

export default MusicUploadForm;
