import Home from "./components/Home/Home";
import {
  Routes,
  Route
} from "react-router";
import TourDetails from "./components/TourDetails/TourDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";
const db = require("./data/db.json");

export default function App() {
  return ( <
      >
      <
      Header / >
      <
      Routes >
      <
      Route path = "/"
      element = {
        < Home data = {
          db
        }
        />} / >
        <
        Route path = "/city/:id"
        element = {
          < TourDetails data = {
            db
          }
          />} / >
          <
          /Routes> <
          Footer / >
          <
          />
        );
      }