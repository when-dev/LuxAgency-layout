import React, { useState } from "react";
import burgerBar from "../../assets/image/icons/burger-bar.png";

function SubMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sub-menu">
      <img onClick={toggleMenu} src={burgerBar} alt="burger" />
      <nav className={isOpen ? "" : "hidden"}>
        <ul>
          <li>
            <a href="#main">Главная</a>
          </li>
          <li>
            <a href="#about">О компании</a>
          </li>
          <li>
            <a href="#services">Услуги</a>
          </li>
          <li>
            <a href="#projects">Проекты</a>
          </li>
          <li>
            <a href="#reviews">Отзывы</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenu;
