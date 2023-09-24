import React, { Component } from "react";
import {
  luxeApartaments,
  centralOffice,
  businessCenter,
} from "../../assets/image/index.js";
import bgPattern from "../../assets/image/icons/bg-pattern.png";
import "./slideToPercent.css";

class SlideToPercent extends Component {
  constructor() {
    super();
    this.state = {
      selectedImageIndex: -1,
      markerPosition: 0,
    };
  }

  handleImageClick = (index) => {
    this.setState((prevState) => {
      if (prevState.selectedImageIndex === index) {
        return { selectedImageIndex: -1, markerPosition: 0 };
      } else {
        let newMarkerPosition = 0;
        if (index === 0) {
          newMarkerPosition = 33.3;
        } else if (index === 1) {
          newMarkerPosition = 66.6;
        } else if (index === 2) {
          newMarkerPosition = 99.9;
        }
        return { selectedImageIndex: index, markerPosition: newMarkerPosition };
      }
    });
  };

  render() {
    const images = [luxeApartaments, centralOffice, businessCenter];
    const { selectedImageIndex, markerPosition } = this.state;
    const gradientStyle = {
      background: `linear-gradient(to right, #B0772A 1.53%, #DEB864 16.83%,#F4D780 25.43%, #F4D780 33.3% ${markerPosition}%, white ${markerPosition}%)`,
    };
    return (
      <div className="down-content">
        <div className="luxe-apartments apartments">
          <img className="pattern-abs__up" src={bgPattern} alt="bgPattern" />
          <h3>люкс апартаменты</h3>
          <img
            src={images[0]}
            alt="luxe"
            onClick={() => this.handleImageClick(0)}
            className={selectedImageIndex === 0 ? "selected" : ""}
          />
        </div>
        <div className="central-office apartments">
          <h3>центральный офис</h3>
          <img
            src={images[1]}
            alt="office"
            onClick={() => this.handleImageClick(1)}
            className={selectedImageIndex === 1 ? "selected" : ""}
          />
          <div className="sliderToPercent">
            <span>1</span>
            <div
              className="slider-track-percent"
              style={{
                left: `${markerPosition}%`,
                width: "100%",
                background:
                  selectedImageIndex >= 0 ? gradientStyle.background : "white",
              }}
            >
              <div className="slider-marker"></div>
            </div>
            <span>3</span>
          </div>
        </div>
        <div className="business-center apartments">
          <h3>бизнес центр</h3>
          <img
            src={images[2]}
            alt="business"
            onClick={() => this.handleImageClick(2)}
            className={selectedImageIndex === 2 ? "selected" : ""}
          />
          <img className="pattern-abs__down" src={bgPattern} alt="bgPattern" />
        </div>
      </div>
    );
  }
}

export default SlideToPercent;
