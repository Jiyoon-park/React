import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/videoList/videoList';


function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyB2RkdjBzA7LEmW6vmlDfuSXMJTjNgD9JU", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
    console.log(videos)
  }, [])

  return (
    <>
      <VideoList videos={videos}/>
      <span>hi</span>
    </>
  );
}

export default App;
