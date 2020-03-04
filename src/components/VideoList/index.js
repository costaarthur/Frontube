import React, { Component } from 'react';

import VideoItem from './VideoItem'

import './styles.css';

import thumb1 from '../../assets/video1.jpg'
import thumb2 from '../../assets/video2.jpg'
import thumb3 from '../../assets/video3.jpg'
import thumb4 from '../../assets/video4.jpg'
import thumb5 from '../../assets/video5.jpg'
import thumb6 from '../../assets/video6.jpg'
import thumb7 from '../../assets/video7.jpg'
import thumb8 from '../../assets/video8.jpg'
import thumb9 from '../../assets/video9.jpg'
import thumb10 from '../../assets/video10.jpg'
import thumb11 from '../../assets/video11.jpg'
import thumb12 from '../../assets/video12.jpg'

import avatar1 from '../../assets/avatar1.jpg'


class VideoList extends Component {
  state = {
    videos: [
      {
        id: 1,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Primo Rico"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb1} /></p>,
        title: "Rumo ao Bilhão #13! Investi R$ 250.000 em Magazine Luiza",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 2,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "André"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb2} /></p>,
        title: "Bom dia mercado - 04/03/2020 - Melhores opções para comprar",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 3,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Galerinha do trade"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb3} /></p>,
        title: "Dicas para montar a carteira vencedora de 2020",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 4,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "God Bona"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb4} /></p>,
        title: "O que fazer em uma possível crise",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 5,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Kobold"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb5} /></p>,
        title: "Estamos em uma bolha financeira?",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 6,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Fabio Segurador"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb6} /></p>,
        title: "Análise dos resultados da Ambev",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 7,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Traders Técnicos"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb7} /></p>,
        title: "Dicas para daytrade em 2020",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 8,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Traderszin"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb8} /></p>,
        title: "Morning call 04 de março",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 9,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "BTG Pactual Digital"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb9} /></p>,
        title: "BTG convida gestor para um bate papo",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 10,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Baroni"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb10} /></p>,
        title: "Análise do melhor fundo imobiliário da bolsa",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 11,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Yanb"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb11} /></p>,
        title: "Investi em BitCoin e olha no que deu",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
      {
        id: 12,
        author: {
          avatar: < p > <img className="avatars" align="left" src={avatar1} /></p>,
          name: "Vicentão"
        },
        thumb: <p><img className="thumbs" align="left" src={thumb12} /></p>,
        title: "Assine já as pimentinhas de março de 2020",
        views: "325 mil visualizações",
        date: "há 1 dia"
      },
    ]
  }

  render() {
    const { videos } = this.state;
    return (
      <div>
        < p className="recomendados" > Recomendados</p >
        < div id="videolist" >
          {videos.map((video, i) => <VideoItem key={video.id} video={video} />)}
        </div >
      </div>
    )
  }
}

export default VideoList