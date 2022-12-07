import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { Offers } from "./components/Offers";
import Heading from "./components/Heading";
import Slider from "./components/Slider";
import HotAccessoriesMenu from './components/HotAccessoriesMenu'
import { default as data } from "./data/data.json";
import { BrowserRouter as Router } from "react-router-dom";
import StarProduct from "./components/StarProduct";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct}/>
      <Heading text = "HOT ACCESSORIES "/>
      <HotAccessoriesMenu/>
    </Router>
  );
}

export default App;
