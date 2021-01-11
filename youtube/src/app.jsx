import React, { useEffect, useState } from 'react';
import './app.css';
import SearchBar from './components/searchBar/searchBar';
import VideoList from './components/videoList/videoList';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const handleSubmit = qurey => {
    youtube.search(qurey)
    .then(videos => setVideos(videos))
  }

  useEffect(() => {
    youtube.mostPopular()
    .then(videos => { setVideos(videos)})
  }, [])

  return (
    <div className="app">
      <SearchBar onSearch={handleSubmit}/>
      <VideoList videos={videos}/>
    </div>
  );
}

export default App;
