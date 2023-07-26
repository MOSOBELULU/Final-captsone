import  { useState, useEffect } from "react";

export default function Poster(props) {
  const [podcastData, setPodcastData] = useState([])
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
    <div>
      <p>{props.id}</p>
      <h2>{props.titles}</h2>
      <p>{props.descriptions}</p>
      <p> Seasons: {props.season}</p>
      <img src={props.images} className="images"></img>
      <p>Genres: {props.genre}</p>
      <p>Updated: {props.updates}</p>
    </div>
  );
}
