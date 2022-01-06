import React from "react";
import "./styles.scss";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const SlideShowControls = () => {
  return (
    <div className="slideshowControls">
      <IoIosArrowForward className="item" />
      <IoIosArrowBack className="item" />
    </div>
  );
};

export default SlideShowControls;
