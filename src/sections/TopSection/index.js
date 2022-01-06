import React from "react";
import ESForm from "../../components/Form";
import SlideShowControls from "../../components/SlideShowControls";
import "./styles.scss";
import Header from "./subSections/Header";
const TopSection = () => {
  return (
    <div className="topSection">
      <Header />
      <div className="tsInner">
        <SlideShowControls />
        <div className="main">
          <span>
            We look forward
            <br />
            to being your next destination!
          </span>
          <ESForm />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
