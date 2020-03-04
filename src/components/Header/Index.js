import React from 'react';

import './styles.css';
import logo from '../../assets/logo-yt.png'
import tokens from '../../assets/header1.png'
import perfil from '../../assets/perfil.jpg'

const Header = () => <header id="main-header">
  <img className="logo" src={logo} />
  <p className="premium">Premium</p>
  <p className="br">BR</p>
  <input type="text" className="txtBusca" placeholder="Pesquisar" size="65" />

  <button className="lupa" type="submit">&#128269;</button>

  <img className="tokens" width="120" src={tokens} />
  <img className="ftperfil" width="35" src={perfil} />


  {/* <p className="mp">Meu perfil</p> */}
</header>


export default Header;