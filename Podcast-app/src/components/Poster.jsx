
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Poster(props) {


  return ( 
    <div className={`card ${props.isExpanded ? 'expanded' : 'blurred'}`} onClick={props.onExpandClick}>
      
      <h2>{props.titles}</h2>
      <img src={props.images} className="images"></img>
      <p> Seasons: {props.season}</p>
      <p>Genres: {props.genre}</p>
      <p>Updated: {props.updates}</p>
      {props.isFavorite ? (

        <img src="./images/heart.png"  className="star" onClick={props.onFavoriteClick}/> 
      ) : (
        <img src="./images/heart-filled.png" className="star" onClick={props.onFavoriteClick}/>
      )
      }
      
      {/*Show more/ show less*/ }

      {props.isExpanded ? (
        <>
          <p>{props.descriptions}</p>
          <ExpandLessIcon onClick={props.onExpandClick} className="expand"/>
        </>
      ) : (
        <ExpandMoreIcon onClick={props.onExpandClick} className="expand" />
      )}
    </div>
  );

}
