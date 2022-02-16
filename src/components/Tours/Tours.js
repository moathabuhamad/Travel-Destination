import Tour from "./tour/Tour";
import "./Tours.css"
export default function Tours(props) {
  return ( <
    >
    <
    h2 className = "tours-data" > Tours data < /h2> <
    div className = "card-container" > {
      props.data.map((tour) => {
        return <Tour key = {
          tour.id
        }
        tour = {
          tour
        }
        />;
      })
    } <
    /div> <
    />
  );
}