import { PropTypes } from "prop-types";


export default function Poster(props) {
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
Poster.propTypes = {
    id: PropTypes.number.isRequired,
    titles: PropTypes.string.isRequired,
    descriptions: PropTypes.string.isRequired,
    season: PropTypes.number.isRequired,
    images: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    updates: PropTypes.string.isRequired,
  };
