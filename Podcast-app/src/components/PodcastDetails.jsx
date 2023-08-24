/*eslint-disable*/
import { useState, useEffect } from 'react';

const PodcastDetails = ({ podcastId }) => {
    console.log("PodcastId:", podcastId);
  const [podcast, setPodcast] = useState(null);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedSeasonEpisodes, setSelectedSeasonEpisodes] = useState(null);

  useEffect(() => {
    // Fetch podcast details using the provided API link
    fetch(`https://podcast-api.netlify.app/id/${podcastId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPodcast(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [podcastId]);

  const handleSeasonSelect = (seasonNumber,seasonepisodes) => {
    setSelectedSeason(seasonNumber);
    setSelectedSeasonEpisodes(seasonepisodes);
  };

  if (!podcast) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>{podcast.title}</h2>
      <p>{podcast.description}</p>

      {/* List all seasons */}
      <div>
        {podcast.seasons.map(season => (
          <div key={season.season}>
            <img className='seasonimage' src={season.image}/>
            <button onClick={() => handleSeasonSelect(season.season,season.episodes)}>
              Season {season.season}
            </button>
          </div>
        ))}
      </div>

      {/* Display episodes for the selected season */}
      
{selectedSeason && (selectedSeasonEpisodes.map(episode => (
  <div>
    <h3>Season {selectedSeason} Episodes: {episode.episode}</h3>
    <p>Title: {episode.title}</p>
    <audio src={episode.file} controls/>
  </div>
))
)}

    </div>
  );
};

export default PodcastDetails