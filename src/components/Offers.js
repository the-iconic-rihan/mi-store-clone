import React from "react";
import Offer from "./offer.js";
import '../styles/offers.css'
export const Offers = ({ offer }) => {
  return (
    <div className="offersSection">
      {offer.map((item, index) => (
        <Offer
          key={item.image}
          index={index}
          src={item.image}
          link={item.url}
        />
      ))}
    </div>
  );
};
