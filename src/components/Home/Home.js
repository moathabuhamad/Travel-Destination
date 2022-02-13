import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Data from "../../data/db.json";
import Tours from "../Tours/Tours.js";
import "./Home.css";
export default function Home() {
  return (
    <div className="App">
      <div id="header">
        <Header />
      </div>

      <div id="Tours">
        <Tours data={Data} />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
}
