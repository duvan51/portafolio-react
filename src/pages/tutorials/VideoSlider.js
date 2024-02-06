import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Slider from 'react-slick';
import { Link } from "react-router-dom";
import VentanaVideo from "./VentanaVideo.js"


import './tutorials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import DataTutorials from "./DataTutorials";


const VideoSlider = () => {
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const [VideoSelect, setVideoSelect]=useState({});
 

  const [activeTab, setActiveTab] = useState('');
  
  

  const videoIds = ['Zw0Chu4us6w', '--zzkapzbZQ', 'Zw0Chu4us6w']; // Reemplaza con tus IDs reales

  const link = "https://www.youtube.com/watch?v=SKnAvkiE0JA"

  const renderCursos =()=>{
    return DataTutorials.map(x => 
      <div key={x.id} onClick={()=> setSelectedCourse(x)}>
        {x.name}
      </div>
      )
  }

  const ObtenerIdDeLink=(link)=>{

    const idOfLink = link.substring(32)
    return idOfLink;
  }
/**aqui manejaremos las pestañas */
    //manejar el cambio de pestañas
  const handleTabSelect = (eventKey) =>{
    setActiveTab(eventKey)
  }
    //verificar si no hay pestañas activas
    if (!activeTab && DataTutorials.length > 0) {
      setActiveTab(DataTutorials[0].name); // Establecer la primera pestaña como activa
    }


  // UseEffect se ejecuta una vez cuando el componente se monta
  useEffect(() => {
    // Verificar si hay tutoriales disponibles y si VideoSelect aún no está seleccionado
    if (DataTutorials.length > 0 && !VideoSelect.id) {
      // Establecer el primer video como seleccionado automáticamente
      setVideoSelect(DataTutorials[0].tutorials[0]);
    }
  }, [DataTutorials, VideoSelect]);

  console.log(VideoSelect)
  console.log(DataTutorials)


/**end pestañas */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };

  const onVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className='tutorialsVideos'>
      
    <Slider {...settings}>
        {videoIds.map((videoId) => (
          <div key={videoId} onClick={() => onVideoClick(videoId)}>
            <img
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={`Thumbnail for video ${videoId}`}
            />
          </div>
        ))}
    </Slider>



    <Tabs
      defaultActiveKey={activeTab}
      id="justify-tab-example"
      className="mb-3"
      justify
      onSelect={handleTabSelect}
      >
    { DataTutorials.map((x)=>( 
      <Tab to={`/tutorials/${x.id}`} key={x.id} title={x.name} eventKey={x.name}>
        <div className='cuadriculavideosTab'>
          {x.tutorials.map((x) => (
            
              <div key={x.id} onClick={() => setVideoSelect(x)}>
                <img
                  src={`https://img.youtube.com/vi/${ObtenerIdDeLink(x.link)}/mqdefault.jpg`}
                  alt={`Thumbnail for video ${ObtenerIdDeLink(x.link)}`}
                />
              </div>
          ))}
        </div>
      </Tab>
    ))}
    </Tabs>


    {selectedVideo && (
        <div>
          <YouTube videoId={selectedVideo} opts={opts} />
        </div>
      )}
      <div className='cuadriculavideos'>
      {videoIds.map((videoId) => (
          <div key={videoId} onClick={() => onVideoClick(videoId)}>
            <img
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={`Thumbnail for video ${videoId}`}
            />
          </div>
      ))}
      </div>



    <VentanaVideo videoSelect={VideoSelect} /> 
    </div>


  );
};

export default VideoSlider;


