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
            <a href="#!">Главная</a>
          </li>
          <li>
            <a href="#!">О компании</a>
          </li>
          <li>
            <a href="#!">Услуги</a>
          </li>
          <li>
            <a href="#!">Проекты</a>
          </li>
          <li>
            <a href="#!">Отзывы</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenu;
