import React from 'react';
import VideoItem from '../videoItem/videoItem';
import './videoList.css'

const VideoList = (props) => {

  return (
    <ul className="videos">
      {props.videos.map((video) => <VideoItem video={video} key={video.id}/>)}
    </ul>
  )      
};

export default VideoList;