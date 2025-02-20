import React from 'react';
import './Video.css';
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import { useRef, useState } from 'react';

export default function Video({
  url,
  channel,
  description,
  song,
  likes,
  shares,
  messages,
}) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        src={url}
        // src="D:/2025/mern projects/short-video-mern/short-video-frontend/src/components/story_002.mp4"
        className="video_player"
        loop
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}
