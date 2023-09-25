import React from "react";
import "./modal.css";
import InputMask from "react-input-mask";


const ModalComponent = ({ isOpen, onClose }) => {
  const closeModalOnOutsideClick = (e) => {
    if (isOpen && e.target.classList.contains("modal")) {
      onClose();
    }
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
          />
        </div>
        <button className="submit-btn">Отправить</button>
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
