import React ,{useRef}from 'react'
import './Video.css'
import Video_play from '../../assets/videoplay.mp4'

const Video = ({playState ,setPlayState}) => {

   const player = useRef(null);

   const ClosePlay=(e)=>{
        if(e.target === player.current){
            setPlayState(false);
        }
   }

     
  return (
    <div className={`video-play  ${playState?'':'hide'} `}  ref={player} onClick={ClosePlay}>
          <video src={Video_play} autoPlay muted controls></video>
    </div>
  )
}

export default Video
