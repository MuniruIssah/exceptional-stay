import React from "react";
import "./styles.scss";
import { RiMapPinLine } from "react-icons/ri";
const ESForm = ({ list = ["Guests"] }) => {
  return (
    <form className="esForm">
      <RiMapPinLine
        style={{ fontSize: 120, color: "#8a8a8a", paddingLeft: "2rem" }}
      />
      <input type={"text"} placeholder="Destination" />
      <input type={"text"} placeholder="Check-in" />
      <input type={"text"} placeholder="Check-out" />
      <select>
        {list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <button>Search</button>
    </form>
  );
};

export default ESForm;
