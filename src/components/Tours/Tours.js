import "./Tours.css";
function Tours(props) {
  return (
    <>
      {props.data.map((tours) => {
        return (
          <>
          <div id="Tours-Container">
            <p>Tour: {tours.name}</p>
            <img src={tours.image} />
            </div>
          </>
        );
      })}
    </>
  );
}
export default Tours;
