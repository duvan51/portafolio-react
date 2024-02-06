import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dataTutorials from '../tutorials/DataTutorials';

import YouTube from 'react-youtube';
import Slider from 'react-slick';
import Accordion from 'react-bootstrap/Accordion';

import './tutorialbyid.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TutorialbyId = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [clickedVideos, setClickedVideos] = useState([]);
  const [video, setVideo] = useState({})


  

  

  const { id } = useParams();
  const tutorial = dataTutorials.find((x) => x.id === parseInt(id, 10));
  const videosTutorial = tutorial.tutorials;
  
  //aqui comenzamos a poner el primer video 
  var linkV = videosTutorial[0].link
  var linkVideoOne = linkV.substring(32);
 

  useEffect(() => {
    // Recuperar la lista de videos clicados desde localStorage al cargar el componente
    const storedClickedVideos = localStorage.getItem('clickedVideos');
    if (storedClickedVideos) {
      setClickedVideos(JSON.parse(storedClickedVideos));
    }
  }, []);

  if (!tutorial) {
    return <div>Curso no encontrado</div>;
  }

  /* aquí vamos a traer los videos por curso */

  const listVideos = videosTutorial.map((x) => {
    // Verificar si el enlace es lo suficientemente largo antes de hacer substring
    if (x.link && x.link.length >= 32) {
      const idVideos = x.link.substring(32);
      const isClicked = clickedVideos.includes(idVideos);

      return (
        <div
          className={`videoId ${isClicked ? 'clicked' : ''} ${selectedVideo === idVideos ? 'newClass' : ''}`}
          key={x.id}
          onClick={() => onVideoClick(idVideos, setVideo(x))}
        >
          <div className='videoIdCard'>
            <img
              src={`https://img.youtube.com/vi/${idVideos}/mqdefault.jpg`}
              alt={`Thumbnail for video ${idVideos}`}
            />
            <div className='videoInfo'>
              <div>{x.name}</div>
              <div>{x.description}</div>
            </div>
          </div>
        </div>
      );
    } else {
      return null; // Otra opción si el enlace no es lo suficientemente largo
    }
  });

  /* aquí vamos a traer los videos por curso */

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const onVideoClick = (videoId) => {
    setSelectedVideo(videoId);

    // Verificar si el video ya ha sido clicado
    if (!clickedVideos.includes(videoId)) {
      // Actualizar la lista de videos clicados
      setClickedVideos((prevClickedVideos) => [...prevClickedVideos, videoId]);

      // Almacenar la lista actualizada en localStorage
      localStorage.setItem('clickedVideos', JSON.stringify([...clickedVideos, videoId]));
    }
  };

  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

 

  return (
    <div className='tutorialsVideos'>
      <div className='tutorialsVideosVideo'>
        <div className='tutorialsVideosVideoHeader'>
          <div>
            {tutorial.name}
          </div>
          <div>
            {tutorial.description}
          </div>
        </div>
        {selectedVideo ? (
            <div>
              <YouTube videoId={selectedVideo} opts={opts} />
            </div>
          ) : (
            <div>
              <YouTube videoId={linkVideoOne} opts={opts} />
            </div>
          )}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{video.name}</Accordion.Header>
              <Accordion.Body>
                {video.description}
              </Accordion.Body>
              </Accordion.Item>
           </Accordion>

      </div>
      
      
      <>
        
        <div className='cuadriculaVideos'>{listVideos}</div>
      </>
    </div>
  );
};

export default TutorialbyId;