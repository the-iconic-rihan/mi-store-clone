import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "../styles/NavOptions.css";
const NavOPtions = ({
  miPhones,
  fitnessAndLifestyle,
  accessoires,
  home,
  tv,
  laptops,
  redmiPhones,
  audio,
}) => {
  const [miPhonesToggle, setMiPhonesToggle] = useState(false);
  const [homeToggle, sethomeToggle] = useState(false);
  const [fitnessAndLifestyleToggle, setfitnessAndLifestyleToggle] =
    useState(false);
  const [accessoiresToggle, setaccessoiresToggle] = useState(false);
  const [audioToggle, setaudioToggle] = useState(false);
  const [redmiPhonesToggle, setredmiPhonesToggle] = useState(false);
  const [laptopsToggle, setlaptopsToggle] = useState(false);
  const [tvToggle, settvToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === "/miphones")
      return setMiPhonesToggle(true);
    if (window.location.pathname === "/home") return sethomeToggle(true);
    if (window.location.pathname === "/lifestyle")
      return setfitnessAndLifestyleToggle(true);
    if (window.location.pathname === "/accessories")
      return setaccessoiresToggle(true);
    if (window.location.pathname === "/audio") return setaudioToggle(true);
    if (window.location.pathname === "/redmiphones")
      return setredmiPhonesToggle(true);
    if (window.location.pathname === "/laptops") return setlaptopsToggle(true);
    if (window.location.pathname === "/tv") return settvToggle(true);
  }, []);

  return (
    <div className="navOPtions">
      {miPhonesToggle
        ? miPhones.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {fitnessAndLifestyleToggle
        ? fitnessAndLifestyle.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {accessoiresToggle
        ? accessoires.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {homeToggle
        ? home.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {audioToggle
        ? audio.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {redmiPhonesToggle
        ? redmiPhones.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {laptopsToggle
        ? laptops.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {tvToggle
        ? tv.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOPtions;
