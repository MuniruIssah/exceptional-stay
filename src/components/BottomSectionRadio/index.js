import React, { useState } from "react";
import "./styles.scss";
const BottomSectionRadioButtons = ({
  list = ["All", "France", "Mexico", "United States", "Spain"],
}) => {
  const [current, setCurrent] = useState("All");
  return (
    <div className="buttonSectionRadioButtons">
      {list.map((item, index) => (
        <BottomSectionRadioButton
          item={item}
          key={index}
          onChange={setCurrent}
          current={current}
        />
      ))}
    </div>
  );
};

export default BottomSectionRadioButtons;

const BottomSectionRadioButton = ({ item, onChange, current }) => {
  const handleChange = () => onChange(item);
  return (
    <div
      onClick={handleChange}
      className={`bottomSectionRadioButton ${
        current === item ? "activeLocation" : ""
      }`}
    >
      {item}
    </div>
  );
};
