import {
  Link,
  Outlet
} from "react-router-dom";
import "./Tour.css";
export default function ToursData(props) {
  return ( <
    >
    <
    Link className = "tour-link"
    to = {
      `/city/${props.tour.id}`
    } >
    <
    div className = "card" >
    <
    h3 > {
      props.tour.name
    } <
    /h3> <
    img src = {
      props.tour.image
    }
    alt = {
      props.tour.name
    }
    /> <
    /div> <
    /Link> <
    Outlet / >
    <
    />
  );
}