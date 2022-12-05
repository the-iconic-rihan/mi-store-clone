import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import Slider from "./components/Slider";
import { default as data } from "./data/data.json";
import { BrowserRouter as Router } from "react-router-dom";
import { Offers } from "./components/Offers";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer}/>
    </Router>
  );
}

export default App;
