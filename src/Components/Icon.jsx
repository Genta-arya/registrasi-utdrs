import React from "react";
import icon from "../assets/icon.png";
const Icon = ({w}) => {
  return (
    <div>
      <img src={icon} alt="" className={`${w} rounded-full`} />
    </div>
  );
};

export default Icon;
