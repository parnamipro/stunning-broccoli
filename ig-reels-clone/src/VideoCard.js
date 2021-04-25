import React, {useState,useRef} from 'react';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';
import './VideoCard.css';

function VideoCard({url,likes,shares,channel,avatarSrc,song}) {
  const [isVideoPlaying,setIsVideoPlaying]=
  useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {

    if(isVideoPlaying){
      videoRef.current.pause();
      setIsVideoPlaying(false)

    }else{
      videoRef.current.play();
      setIsVideoPlaying(true)
    }

  }



  return(
    <div className="videocard">
    <VideoHeader />
    <video
    ref={videoRef}
    onClick={onVideoPress}
    className="videocard_player"
       src={url}
       alt="ig reel video"
       loop

       />
       <VideoFooter
         channel={channel}
         likes={likes}
         shares={shares}
         avatarSrc={avatarSrc}
         song={song}
        />
    </div>

  )
}


export default VideoCard
