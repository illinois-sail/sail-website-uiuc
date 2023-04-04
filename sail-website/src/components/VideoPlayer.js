import React from 'react';
import video from './promo.mp4'
import './VideoPlayer.css';

function VideoPlayer() {
  return (
    <video src = {video} controls className = "video-player"/>
  );
}
export default VideoPlayer;