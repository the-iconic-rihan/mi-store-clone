import React from "react";
import VideoCard from "./VideoCard";
import '../styles/Videos.css'
const Videos = ({ videos }) => {
  return (
    <div className="Videos">
      {videos.map((item, index) => (
        <VideoCard
          key={item.image}
          name={item.name}
          image={item.image}
          index={index}
        />
      ))}
    </div>
  );
};

export default Videos;
