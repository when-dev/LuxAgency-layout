import React, { useState } from "react";
import burgerBar from "../../assets/image/icons/burger-bar.png";
import { Link } from "react-scroll";

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
            <Link  to="home" smooth={true} duration={1000}>
              <a href="#home">Главная</a>
            </Link>
          </li>
          <li>
            <Link  to="about" smooth={true} duration={1000}>
              <a href="#about">О компании</a>
            </Link>
          </li>
          <li>
            <Link  to="projects" smooth={true} duration={1000}>
              <a href="#projects">Проекты</a>
            </Link>
          </li>
          <li>
            <Link  to="reviews" smooth={true} duration={1000}>
              <a href="#reviews">Отзывы</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SubMenu;
