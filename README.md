## An overview of the component structure

The application consist of the following components:

Root component is the App component.

App component contains button components(PLayAllButton, AddAllButton, TrackNumberButton, SearchButton), SongList and MusicUploadForm components.

SongList consists of table, which as a row renders SongRow component.

Music upload is done by MusicUploadForm component.

## The state management approach

Used React's useState and pass it from high level with props.

## Instructions on how to run the application locally

run application - npm start
run tests - npm run test

## Any assumptions or additional features implemented

After uploading the file is added to the playlist.

In case of chosen file type is not audio, displays error message.
