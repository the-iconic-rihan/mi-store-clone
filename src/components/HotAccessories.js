import React from "react";
import HotItemCard from "./HotItemCard";
import { default as data } from "../data/data.json";

import "../styles/HotAccessories.css";
const HotAccessories = ({
  music,
  musicCover,
  smartDevice,
  smartDeviceCover,
  home,
  homeCover,
  lifestyle,
  lifestyleCover,
  mobileAccessories,
  mobileAccessoriesCover,
}) => {
  return (
    <div className="HotAccessories">
      <div>
        <img
          src={
            musicCover ||
            smartDeviceCover ||
            homeCover ||
            lifestyleCover ||
            mobileAccessoriesCover
          }
          alt="cover"
        />
      </div>
      {/* ~~~~~2nd image~~~~~ */}
      <div>
        {/* for music */}
        {music &&
          music.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {/* for smart devices */}
        {smartDevice &&
          smartDevice.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {/* for home */}
        {home &&
          home.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {/* for liofestyle */}
        {lifestyle &&
          lifestyle.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {/* for mobileaAccessories */}
        {mobileAccessories &&
          mobileAccessories.map((item, index) => (
            <HotItemCard
              key={item.image}
              name={item.name}
              price={item.price}
              image={item.image}
              index={index}
            />
          ))}

        {/* browse more button */}
        <HotItemCard image={data.BrowseButton.moreButton}/>
      </div>
    </div>
  );
};

export default HotAccessories;
