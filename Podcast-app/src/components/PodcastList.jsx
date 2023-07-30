import  { useState, useEffect } from "react";
import Poster from "./Poster";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


export default function PodcastList({ podcasts }) {
  const [isLoading, setIsLoading] = useState(true);
  const [podcastData, setPodcastData] = useState([])
  

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/shows")
      .then(res => res.json())
      .then(data => {
        setPodcastData(data);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    //loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const formatDate = (isDate) => {
    const date = new Date(isDate)
    const options = {year: "numeric", month: "long", day: "numeric"}
    return date.toLocaleDateString(undefined, options)
  }
  const Genre = {
    1: "Personal Growth",
    2: "True Crime and Investigative Journalism",
    3: "History",
    4: "Comedy",
    5: "Entertainment",
    6: "Business",
    7: "Fiction",
    8: "News",
    9: "Kids and Family",
  }

  return (
    <div className="Poster">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid-container">
        {podcastData.map(podcast =>(
          <Poster
          key={podcast.id}
          titles={podcast.title}
          descriptions={podcast.description}
          season={podcast.seasons}
          images={podcast.image}
          genre={Genre[podcast.genres] || "unknown"}
          updates={formatDate(podcast.updated)}
        />
        ))}
        </div>
      )}
      </div>
    
  )

    }
