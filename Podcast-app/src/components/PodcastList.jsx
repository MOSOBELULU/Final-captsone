import  { useState, useEffect } from "react";
import Poster from "./Poster";
import { PropTypes } from "prop-types";

export default function Podcastlist({ podcasts }) {
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
            key={item._id}
            id={item.id}
            titles={item.title}
            descriptions={item.description}
            season={item.seasons}
            images={item.image}
            genre={item.genres}
            updates={item.updated}
          />
        ))
      )}
    </div>
  );
}


Podcastlist.propTypes = {
    podcasts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      seasons: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      genres: PropTypes.string.isRequired,
      updated: PropTypes.string.isRequired,
    })).isRequired,
  };