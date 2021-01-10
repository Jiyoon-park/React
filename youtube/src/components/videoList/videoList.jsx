import React from 'react';
import VideoItem from '../videoItem/videoItem';

const VideoList = (props) => {

  return (
    <ul>
      {props.videos.map((video) => <VideoItem video={video} key={video.id}/>)}
    </ul>
  )      
};

export default VideoList;