import React, { useState, useEffect } from 'react';
import './VentanaVideo.css'
import YouTube from 'react-youtube';




const VentanaVideo = (props) => {

  const [envVideo, setenvVideo] = useState({});

  
  const {videoSelect} = props;

  const objet = videoSelect

  
  // UseEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    setenvVideo(objet)
  }, []);

 



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

      if(videoSelect){
        const VideoId = ObtenerIdDeLink(videoSelect.link)  
      } const VideoId = ""
      

      console.log(VideoId)

    return (
      
    <div className='ventanaVideo'>


        <div className='ventanaVideoY'>
          <YouTube videoId={VideoId} opts={opts} />
        </div>
    
    </div>
  )
}

export default VentanaVideo