import React from "react";
import InputMask from "react-input-mask";
import submitBtn from "../../assets/image/icons/submit-btn.png";

function PhoneNumberInput() {

  return (
    <div className="input-div">
      <InputMask
        mask="+7-(999)-999-99-99"
        type="tel"
        className="phone-input"
        placeholder="Телефон"
      />
      <a href="#!">
        <img src={submitBtn} alt="btn" />
      </a>
    </div>
  );
}

export default PhoneNumberInput;
