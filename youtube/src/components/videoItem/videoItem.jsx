import React from 'react';
import './videoItem.css'

const VideoItem = ({video : {snippet}}) => {

  return (
    <li className="video">
      <img className="video-thumbnail" src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
      <div className="meta-data">
        <p className="title">{snippet.title}</p>
        <p className="channel">{snippet.channelTitle}</p>
      </div>
    </li>
  )
}

export default VideoItem;