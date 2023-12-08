/*eslint-disable*/
import Icon from "@mui/material/Icon";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function NavBar({onToggleView}) {

  return (
    <nav className="nav">
      <div className="logo">
        <IconButton className="LOGO" onClick={onToggleView}>
        <Icon className="mic" fontSize="50px">mic</Icon>
        <span className="logo-span">Lu-PODCAST</span>
        </IconButton>
        <IconButton className="FAV" onClick={onToggleView}>
        <FavoriteIcon className="heart" fontSize="50px" />
          <span className="logo-span">Favorite Podcasts</span>
        </IconButton>
      </div>
    </nav>
  );
}