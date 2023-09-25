import React, { useState } from "react";
import "./modal.css";
import InputMask from "react-input-mask";
import axios from "axios";

const ModalComponent = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const closeModalOnOutsideClick = (e) => {
    if (isOpen && e.target.classList.contains("modal")) {
      onClose();
    }
  };

  const handleSubmit = () => {
    axios
      .post("https://localhost:3000/create_lead", {
        lead_type: "Перезвон", 
        contact_info: "89996295430",
      })
      .then((response) => {
        console.log("Успешно отправлено", response.data);
      })
      .catch((error) => {
        console.error("Произошла ошибка при отправке", error);
      });

    onClose();
  };

  return isOpen ? (
    <div className="modal" onClick={closeModalOnOutsideClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}></span>
        <h2>Введите данные для обратной связи</h2>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            placeholder="Имя"
            required
            pattern="[A-Za-zА-Яа-яЁё]*"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Телефон:</label>
          <InputMask
            mask="+7-(999)-999-99-99"
            type="tel"
            className="phone-input-modal"
            placeholder="Телефон"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <button className="submit-btn" onClick={handleSubmit}>Отправить</button>
        <div>
          <p className="modal-telegram">Или свяжитесь с нами в Telegram:</p>
          <a href="#!" target="_blank" rel="noopener noreferrer">
            <button className="telegram-btn">Перейти в Telegram</button>
          </a>
        </div>
      </div>
    </div>
  ) : null;
};

export default ModalComponent;
