import './App.css';
import Prenavbar from './components/prenavbar';
import Navbar from"./components/Navbar.js";
import {BrowserRouter as Router} from "react-router-dom"
import Slider from "./components/Slider.js"
import data from "./data/data.json"

function App() {
  return (
    <Router>
      <Prenavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      {/* <Offer /> */}
    </Router>
  );
}

export default App;
