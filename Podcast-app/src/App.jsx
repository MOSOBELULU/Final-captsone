
import  { useState, useEffect } from 'react';
import './App.css';
import Poster from "./components/Poster";
import NavBar from './components/NavBar';
import PodcastList from './components/PodcastList';

export default function App() {
  
  

  
  return (
    <>
      <NavBar />
      <div>
        <PodcastList podcasts={podcastData} />
        <Poster />
      </div>
    </>
  );
}