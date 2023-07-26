
import  { useState, useEffect } from 'react';
import './App.css';
import Poster from "./components/Poster";
import NavBar from './components/NavBar';
import Podcastlist from './components/PodcastList';

export default function App() {
  const [podcastData, setPodcastData] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then(res => res.json())
      .then(data => {
        const mapData = data.map((datamapping) => (
          <Poster 
            key={datamapping.id}
            titles={datamapping.title}
            descriptions={datamapping.description}
            season={datamapping.seasons}
            images={datamapping.image}
            genre={datamapping.genres}
            updates={datamapping.updated}

          />
        ));
        setPodcastData(mapData);
      });
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return (
    <>
      <NavBar />
      <div>
        <Podcastlist podcasts={podcastData} />
      </div>
    </>
  );
}