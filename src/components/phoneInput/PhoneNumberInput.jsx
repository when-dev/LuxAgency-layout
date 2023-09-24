import React, { useState } from "react";
import InputMask from "react-input-mask";
import submitBtn from "../../assets/image/icons/submit-btn.png";

function PhoneNumberInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    setPhoneNumber(inputValue);
    setIsValid(true);
  };

  return (
    <div className="input-div">
      <InputMask
        mask="+7-(999)-999-99-99"
        type="tel"
        className="phone-input"
        value={phoneNumber}
        placeholder="Телефон"
        onChange={handleInputChange}
      />
      <a href="#!">
        <img src={submitBtn} alt="btn" />
      </a>

      {!isValid && ""}
    </div>
  );
}

export default PhoneNumberInput;
