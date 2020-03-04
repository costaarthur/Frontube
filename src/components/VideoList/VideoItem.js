import React from 'react';
//import PropTypes from 'prop-types';

function VideoItem({ video }) {
  return (
    < div className="videoarea"  >

      {/* <p className="recomendados">Recomendados</p> */}
      <p className="thumb" >{video.thumb}</p>
      <p className="avatar">{video.author.avatar}</p>
      <p className="title">{video.title}</p>
      <p className="nome">{video.author.name}</p>
      <p className="view">{video.views}</p>
      <p className="data">{video.date}</p>

    </div >
  );
}


export default VideoItem