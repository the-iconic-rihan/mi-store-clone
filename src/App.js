import "./App.css";
import Navbar from "./components/Navbar";
import PreNavbar from "./components/PreNavbar";
import { Offers } from "./components/Offers";
import Heading from "./components/Heading";
import Slider from "./components/Slider";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu";
import { default as data } from "./data/data.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StarProduct from "./components/StarProduct";
import HotAccessories from "./components/HotAccessories";
import Videos from "./components/Videos";
import ProductReviews from "./components/ProductReviews";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import NavOptions from "./components/NavOPtions";
function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />

      <NavOptions
        miPhones={data.miPhones}
        redmiPhones={data.redmiPhones}
        laptops={data.laptop}
        tv={data.tv}
        home={data.home}
        audio={data.audio}
        accessoires={data.accessories}
        fitnessAndLifestyle={data.fitnessAndLifeStyle}
      />
      <Slider start={data.banner.start} />
      <Offers offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct starProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES " />
      <HotAccessoriesMenu />

      {/* routes are used to render another component after any mouse event or click */}
      <Routes>
        <Route
          exact
          path="/music"
          element={
            <HotAccessories
              music={data.hotAccessories.music}
              musicCover={data.hotAccessoriesCover.music}
            />
          }
        />
        <Route
          exact
          path="/smartDevice"
          element={
            <HotAccessories
              smartDevice={data.hotAccessories.smartDevice}
              smartDeviceCover={data.hotAccessoriesCover.smartDevice}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            <HotAccessories
              home={data.hotAccessories.home}
              homeCover={data.hotAccessoriesCover.home}
            />
          }
        />

        <Route
          exact
          path="/lifestyle"
          element={
            <HotAccessories
              lifestyle={data.hotAccessories.lifeStyle}
              lifestyleCover={data.hotAccessoriesCover.lifeStyle}
            />
          }
        />
        <Route
          exact
          path="/mobileAccessories"
          element={
            <HotAccessories
              mobileAccessories={data.hotAccessories.mobileAccessories}
              mobileAccessoriesCover={
                data.hotAccessoriesCover.mobileAccessories
              }
            />
          }
        />
      </Routes>

      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={data.productReviews} />

      <Heading text="VIDEOS" />
      <Videos videos={data.videos} />

      <Heading text="IN THE PRESS" />

      <Banner banner={data.banner.end} />

      <Footer footer={data.footer} />
    </Router>
  );
}

export default App;
