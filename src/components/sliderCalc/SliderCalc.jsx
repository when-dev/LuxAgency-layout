import React, { useState } from "react";
import "./slider.css";
import typeOne from "../../assets/image/profitability-calc/type-1.png";
import typeTwo from "../../assets/image/profitability-calc/type-2.png";
import typeThree from "../../assets/image/profitability-calc/type-3.png";
import typeFour from "../../assets/image/profitability-calc/type-4.png";
import CustomSlider from "../customSlider/CustomSlider";

const SliderCalc = () => {
  const [slider, setSlider] = useState([0, 0, 0]);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSliderChange = (index, value) => {
    const newValues = [...slider];
    newValues[index] = value;
    setSlider(newValues);
  };

  const handleManualChange = (index, value) => {
    const numericValue = parseFloat(value.replace(/\s/g, ""));

    if (!isNaN(numericValue)) {
      if (numericValue <= minMaxValues[index].max) {
        handleSliderChange(index, numericValue);
      } else {
        handleSliderChange(index, minMaxValues[index].max);
      }
    } else if (value === "" || value === "-") {
      handleSliderChange(index, 0);
    }
  };

  const handleImageClick = (imageType) => {
    if (selectedImage === imageType) {
      setSelectedImage(null);
    } else {
      setSelectedImage(imageType);
    }
  };

  const totalValue = slider.reduce(
    (acc, currentValue) => acc + currentValue,
    0
  );

  const minMaxValues = [
    { min: 0, max: 500000 },
    { min: 0, max: 50000 },
    { min: 0, max: 10000000 },
  ];

  const leftTextValue = [
    { text: "Сумма арендной платы" },
    { text: "Операционные расходы" },
    { text: "Заемные средства⠀⠀⠀" },
  ];

  return (
    <div className="slider-container">
      <div className="sliders">
        {slider.map((value, index) => (
          <div className="slider" key={index}>
            <div className="slider-info">
              <span className="slider-label">{leftTextValue[index].text}</span>
              <span className="slider-value">
                <input
                  name="0"
                  type="text"
                  value={value.toLocaleString("ru-RU")}
                  onChange={(e) => handleManualChange(index, e.target.value)}
                />
                <span className="rub">₽</span>
              </span>
            </div>
            <CustomSlider
              value={value}
              onChange={(newValue) => handleSliderChange(index, newValue)}
              min={minMaxValues[index].min}
              max={minMaxValues[index].max}
            />
          </div>
        ))}
      </div>
      <div className="slider__general-container">
        <div className="slider-content__left">
          <div className="property-text__inner">
            <p>Выбери тип недвижимости</p>
          </div>
          <div className="property-row">
            <img
              src={typeOne}
              alt="type-one"
              onClick={() => handleImageClick("typeOne")}
              className={selectedImage === "typeOne" ? "selected" : ""}
            />
            <img
              src={typeTwo}
              alt="type-two"
              onClick={() => handleImageClick("typeTwo")}
              className={selectedImage === "typeTwo" ? "selected" : ""}
            />
            <img
              src={typeThree}
              alt="type-three"
              onClick={() => handleImageClick("typeThree")}
              className={selectedImage === "typeThree" ? "selected" : ""}
            />
            <img
              src={typeFour}
              alt="type-four"
              onClick={() => handleImageClick("typeFour")}
              className={selectedImage === "typeFour" ? "selected" : ""}
            />
          </div>
        </div>
        <div className="slider-content__right">
          <div className="profit-info">
            <div className="border">
              <p>
                Итого Прибыль <br />
                <span>
                  {totalValue.toLocaleString("ru-RU")} 
                  ₽
                </span>
              </p>
            </div>
          </div>
          <button>Заказать Консультацию</button>
        </div>
      </div>
    </div>
  );
};

export default SliderCalc;
