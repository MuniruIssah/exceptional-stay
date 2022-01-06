import React from "react";
import BottomSectionRadioButtons from "../../components/BottomSectionRadio";
import "./styles.scss";
const BottomSection = () => {
  return (
    <div className="esBottomSection">
      <span>Discover your next exceptional stay</span>
      <p>
        From arranging your activities to securing hard to find reservation our
        concierge
        <br /> team will make sure all elements of your trip are exceptional
      </p>
      <BottomSectionRadioButtons />
    </div>
  );
};

export default BottomSection;
