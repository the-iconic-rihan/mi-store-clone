 import React from "react";

const offer = ({ src, link, index }) => {
  return (
    <div>
      <a href={link}>
        <img src={src} alt={`${index} offer`} />
      </a>
    </div>
  );
};

export default offer;
