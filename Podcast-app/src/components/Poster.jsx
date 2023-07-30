import { useState } from "react";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Poster(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  }
 

  return ( 
    <div className="card">
      <p>{props.id}</p>
      <h2>{props.titles}</h2>
      <img src={props.images} className="images"></img>
      <p> Seasons: {props.season}</p>
      <p>Genres: {props.genre}</p>
      <p>Updated: {props.updates}</p>
      <img src="./images/heart.png"  className="star"/>
      
      {/*Show more/ show less*/ }

      {expanded ? (
        <>
          <p>{props.descriptions}</p>
          <ExpandLessIcon onClick={handleExpand} />
        </>
      ) : (
        <ExpandMoreIcon onClick={handleExpand} />
      )}
      
      
    </div>
  );
}
