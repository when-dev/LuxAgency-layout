import React from "react";
import "./customeSlider.css";

const CustomSlider = ({ value, onChange, min, max }) => {
  return (
    <div className="custom-slider">
      <div className="slider-track">
        <div
          className="slider-fill"
          style={{
            width: `${((value - min) / (max - min)) * 100}%`,
          }}
        ></div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step="1"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  );
};

export default CustomSlider;
