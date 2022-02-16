import {
  useParams
} from "react-router-dom";
import {
  tourById
} from "../../data/data";
import {
  useState
} from "react";
import "./TourDetails.css";

export default function TourDetails(props) {
  let params = useParams();
  let tour = tourById(props.data, params.id);
  const [readMore, setReadMore] = useState(true);

  function toggleReadMore() {
    setReadMore(!readMore);
  }
  return ( <
    >
    <
    div className = "container" >
    <
    h2 className = "heading" > {
      tour.name
    } tour info < /h2> <
    p className = "text" > {
      readMore ? tour.info.slice(0, 250) + "..." : tour.info
    } <
    span className = "moreLess"
    onClick = {
      toggleReadMore
    } > {
      readMore ? "more" : "show less"
    } <
    /span> <
    /p> <
    img src = {
      tour.image
    }
    alt = {
      `image from ${tour.name}`
    }
    /> <
    p className = "price" > Price =  {
      tour.price
    } < /p> <
    /div> <
    />
  );
}