import React from 'react';
import './App.css';
import './styles.css';

import TechList from './components/TechList'
import Header from './components/Header'
import PostList from './components/PostList'
import Footer from './components/Footer'
import VideoList from './components/VideoList'

function App() {
  return (
    <div className="App">
      <Header />

      <VideoList />
      <Footer />
    </div>

  )
}

export default App;