import React from 'react';
import video from './promo.mp4'

function VideoPlayer() {
  return (
    <video style={{ width: "80%", height: "80%", objectFit: "cover" }} src = {video} controls/>
  );
}
export default VideoPlayer;