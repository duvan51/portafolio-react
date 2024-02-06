import React from 'react'
import './VentanaVideo.css'
import YouTube from 'react-youtube';



const VentanaVideo = (props) => {
  
  const {videoSelect} = props;
  
 

  const ObtenerIdDeLink=(link)=>{

    const idOfLink = link.substring(32)
    return idOfLink;
  }
  
      const opts = {
        height: '190',
        width: '380',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 10,
          startSeconds:250,
        },
        
      };

      const VideoId = ObtenerIdDeLink(videoSelect.link)
  
    return (
      
    <div className='ventanaVideo'>


        <div className='ventanaVideoY'>
          <YouTube videoId={VideoId} opts={opts} />
        </div>
    
    </div>
  )
}

export default VentanaVideo