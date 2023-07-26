import  { useState, useEffect } from "react";
import Poster from "./Poster";


export default function PodcastList({ podcasts }) {
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    //loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="Poster">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        podcasts.map((item) => (
          <Poster
            key={podcasts.id}
            titles={podcasts.title}
            descriptions={podcasts.description}
            season={podcasts.seasons}
            images={podcasts.image}
            genre={podcasts.genres}
            updates={podcasts.updated}
          />
        ))
      )
    )
    
    }
    
  



