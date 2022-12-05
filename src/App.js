import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import Slider from './components/Slider'
import { default as data } from "./data/data.json";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start}/>
    </Router>
  );
}

export default App;
