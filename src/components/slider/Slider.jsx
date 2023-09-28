import React, { useState } from "react";
import "./slider.css";
import {
  firstServicesPic,
  secondServicesPic,
  thirdServicesPic,
  arrowLeft,
  arrowRight,
} from "../../assets/image/index.js";

const Slider = () => {
  const slides = [
    {
      image: firstServicesPic,
      title: "Покупка Недвижимости",
      items: [
        "Помощь в поиске и подборе инвестиционного объекта",
        "Проведение просмотров недвижимости",
        "Участие в переговорах и оформление сделок купли-продажи",
        "Юридическое сопровождение сделки",
      ],
    },
    {
      image: secondServicesPic,
      title: "Продажа Недвижимости",
      items: [
        "Оценка стоимости недвижимости",
        "Создание привлекательных объявлений и маркетинговых кампаний",
        "Продвижение недвижимости на рынке",
        "Подготовка документации для сделки",
      ],
    },
    {
      image: thirdServicesPic,
      title: "Аренда Недвижимости",
      items: [
        "Поиск арендаторов для недвижимости владельцев",
        "Подбор жилых и коммерческих объектов для арендаторов",
        "Оформление арендных договоров и урегулирование споров",
        "Управление недвижимостью для арендодателей",
      ],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider__container">
      <div className="slider-general__container">
        <div className="slider-controls">
          <img
            src={arrowLeft}
            alt="arrow-left"
            className="slider-control-button"
            onClick={prevSlide}
          />
        </div>
        <div className="slider-controls-adaptive">
          <img
            src={arrowRight}
            alt="arrow-right"
            className="slider-control-button"
            onClick={nextSlide}
          />
        </div>
      </div>

      <div className="slider-row">
        <img src={slides[currentSlide].image} alt={`slide-${currentSlide}`} />
        <div className="slider-info">
          <h3>{slides[currentSlide].title}</h3>
          <ul>
            {slides[currentSlide].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="slider-controls for-adaptive">
        <img
          src={arrowRight}
          alt="arrow-right"
          className="slider-control-button"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export default Slider;