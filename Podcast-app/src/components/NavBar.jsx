import React, { useState } from "react";
import Icon from "@mui/material/Icon";
import FavoritePodcast from "./Favorite";

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
      <button onClick={() => window.location.href = "/favorites"}>Go to Favorite Podcasts</button>

    </nav>
  );
}
