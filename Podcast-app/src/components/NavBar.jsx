import { useState } from "react";
import Icon from "@mui/material/Icon";
import FavoritePodcast from "./Favorite";

export default function NavBar({ favoritePodcasts, favorites, onShowFavoritesClick, onShowAllClick  }) {
  // const [expandedPosterId, setExpandedPosterId] = useState(null);

  // const toggleExpand = (podcastId) => {
  //   setExpandedPosterId((prevState) => (prevState === podcastId ? null : podcastId));
  // };

  return (
    <nav className="nav">
      <Icon className="icon-logo" fontSize="50px">
        mic
      </Icon>
      <button onClick={onShowFavoritesClick}>Go to Favorite Podcasts</button>
      {favoritePodcasts.length > 0 ? (
        <div>
          <h3>Favorite Podcasts</h3>
          <ul>
            {favoritePodcasts.map((podcast) => (
              <li key={podcast.id}>{podcast.title}</li>
            ))}
          </ul>
        </div>
      ) : (
        <button onClick={onShowAllClick}>Go Back</button>
      )}
    </nav>
  );
}