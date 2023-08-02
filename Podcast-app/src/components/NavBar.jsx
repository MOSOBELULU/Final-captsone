import React, { useState } from "react";
import Icon from "@mui/material/Icon";

export default function NavBar({ favoritePodcasts, onShowFavoritesClick, onSortClick, filterText, onFilterChange }) {
  const [expandedPosterId, setExpandedPosterId] = useState(null);

  const toggleExpand = (podcastId) => {
    setExpandedPosterId((prevState) => (prevState === podcastId ? null : podcastId));
  };

  return (
    <nav className="nav">
      <Icon className="icon-logo" fontSize="50px">
        mic
      </Icon>
      <button onClick={onShowFavoritesClick}>Favourite</button>
      {favoritePodcasts.length > 0 && (
        <div>
          <h3>Favorite Podcasts</h3>
          <ul>
            {favoritePodcasts.map((podcast) => (
              <li key={podcast.id}>{podcast.title}</li>
            ))}
          </ul>
        </div>
      )}

    </nav>
  );
}
