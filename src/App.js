import React, { useState, useEffect } from "react";
import Loader from "./components/loader/Loader.jsx";
import SliderCalc from "./components/sliderCalc/SliderCalc.jsx";
import Slider from "./components/slider/Slider.jsx";
import PhoneNumberInput from "./components/phoneInput/PhoneNumberInput.jsx";
import SlideToPercent from "./components/slideToPercent/SlideToPercent.jsx";
import SubMenu from "./components/submenu/SubMenu.jsx";
import ModalComponent from "./components/modal/Modal.jsx";

import {
  // OUR_TEAM IMAGES
  maxWiwi,
  wellSofi,
  ruslan,
  anna,
  igorek,
  antosha,
  vitaminka,
  muslim,
  antonodzhi,
  vladik,
  andrusha,
  platina,

  // WHY-US IMAGES
  aboutFirstIcon,
  aboutSecondIcon,
  aboutThirdIcon,
  aboutFourthIcon,
  aboutFifthIcon,
  aboutSixIcon,

  // OUR-REVIEWS IMAGES
  firstPic,
  secondPic,
  thirdPic,

  // FOOTER SOCIAL-NETWORK IMAGES
  vkIcon,
  instagramIcon,
  telegramIcon,
  mailIcon,
  locationIcon,
  // mailIcon,
  // locationIcon,
} from "./assets/image/index.js";
import submitBtn from "./assets/image/icons/submit-btn.png";
import figureBg from "./assets/image/icons/bg-figure.png";
import diamondBg from "./assets/image/icons/bg-diamond.png";
import stars from "./assets/image/icons/star.png";
import rectSmall from "./assets/image/icons/bg-react-small.png";
import rectNormal from "./assets/image/icons/bg-rect.png";
import thinkingMan from "./assets/image/about/thinking-man.png";
import bgSquare from "./assets/image/icons/bg-border-square.png";
import callbtn from "./assets/image/call.svg";
import "./assets/css/style.css";
import "./assets/css/mediaRequest.css";

import { Link } from "react-scroll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const wasLoaded = localStorage.getItem("wasLoaded");
    if (wasLoaded) {
      setLoading(false);
    } else {
      const timeout = setTimeout(() => {
        setLoading(false);
        localStorage.setItem("wasLoaded", "true");
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <header id="home" className="header">
        <div className="header__inner">
          <div className="container header__container">
            <div className="logo">NewLuxe</div>
            <nav className="header__nav">
              <ul>
                <li>
                  <Link to="home" smooth={true} duration={1000}>
                    <a href="#!">Главная</a>
                  </Link>
                </li>
                <li>
                  <Link to="about" smooth={true} duration={1000}>
                    <a href="#!">О компании</a>
                  </Link>
                </li>
                <li>
                  <Link to="services" smooth={true} duration={1000}>
                    <a href="#!">Услуги</a>
                  </Link>
                </li>
                <li>
                  <Link to="projects" smooth={true} duration={1000}>
                    <a href="#!">Проекты</a>
                  </Link>
                </li>
                <li>
                  <Link to="reviews" smooth={true} duration={1000}>
                    <a href="#!">Отзывы</a>
                  </Link>
                </li>
              </ul>
            </nav>
            <SubMenu />
            <a href="#!" className="callbtn" onClick={openModal}>
              <img src={callbtn} alt="callBtn" />
            </a>
          </div>
        </div>
        <h1>агентство недвижимости</h1>
        <h2>Лучшие идеи – Лучшее решение – Лучший результат</h2>
        <div className="center-content">
          <button className="order-btn" onClick={openModal}>
            заказать консультацию
          </button>
        </div>
      </header>

      <ModalComponent isOpen={isModalOpen} onClose={closeModal} />

      <section className="our_team">
        <div className="team__container">
          <h2 className="team-title">
            Наша <br /> команда
          </h2>
          <p className="team-description">
            Команда профессионалов, которая работает над тем, чтобы предоставить{" "}
            <br />
            вам лучший сервис и креативные решения. Мы рады реализовать самые{" "}
            <br />
            сложные проекты и предоставить вам недвижимость вашей мечты!
          </p>
        </div>
        <div className="container">
          <div className="team-grid">
            <div className="team-member">
              <img src={maxWiwi} alt="maxWiwi" />
              <p className="team-member-name">Max Wiwi</p>
              <p className="job-title">Президент студии</p>
            </div>
            <div className="team-member">
              <img src={wellSofi} alt="wellSofi" />
              <p className="team-member-name">Well Sofi</p>
              <p className="job-title">Первая Леди</p>
            </div>
            <div className="team-member">
              <img src={ruslan} alt="ruslan" />
              <p className="team-member-name">Руслан</p>
              <p className="job-title">Куратор проектов</p>
            </div>
            <div className="team-member">
              <img src={anna} alt="anna" />
              <p className="team-member-name">Анна</p>
              <p className="job-title">Менеджер проектов</p>
            </div>
            <div className="team-member">
              <img src={igorek} alt="igorek" />
              <p className="team-member-name">Игорёк</p>
              <p className="job-title">Team Leader</p>
            </div>
            <div className="team-member">
              <img src={antosha} alt="antosha" />
              <p className="team-member-name">Антоша</p>
              <p className="job-title">Ведущий программист</p>

            </div>
            <div className="team-member">
              <img src={vitaminka} alt="Витаминка" />
              <p className="team-member-name">Витаминка</p>
              <p className="job-title">Senior</p>

            </div>
            <div className="team-member">
              <img src={muslim} alt="Муслим" />
              <p className="team-member-name">Муслим</p>
              <p className="job-title">Контент мендежер</p>

            </div>
            <div className="team-member">
              <img src={antonodzhi} alt="Антоноджи" />
              <p className="team-member-name">Антоноджи</p>
              <p className="job-title">Маркетолог</p>

            </div>
            <div className="team-member">
              <img src={vladik} alt="Владик" />
              <p className="team-member-name">Владик</p>
              <p className="job-title">Middle программист</p>

            </div>
            <div className="team-member">
              <img src={andrusha} alt="Андрюша" />
              <p className="team-member-name">Андрюша</p>
              <p className="job-title">Junior программист</p>

            </div>
            <div className="team-member">
              <img src={platina} alt="Платина" />
              <p className="team-member-name">Платина</p>
              <p className="job-title">Отдел тестирования</p>

            </div>
          </div>
        </div>
      </section>

      <section className="about-company" id="about">
        <div className="container">
          <div className="left-content">
            <h2 className="about-title">о компании</h2>
            <img src={thinkingMan} alt="thinkingMan" />
          </div>
          <div className="right-content">
            <p className="gradient-text">
              Агентство начало свою деятельность с 2015 <br /> года и по
              настоящее время радует <br /> клиентов своими проектами
            </p>
            <p className="about__company-text">
              Наше агентство недвижимости - это <br /> надежный партнер в мире
              недвижимости, <br /> предоставляющий высококачественные <br />{" "}
              услуги по покупке, продаже и управлению <br /> недвижимостью.{" "}
              <br /> <br /> Мы сочетаем профессионализм, экспертизу <br /> и
              внимание к деталям, чтобы помочь <br />
              нашим клиентам достичь своих целей в <br /> недвижимости,
              независимо от их <br /> потребностей и бюджета. Доверьтесь нам,{" "}
              <br /> и мы сделаем ваше недвижимое будущее <br /> более успешным
              и удовлетворительным.
            </p>
            <div className="company-stats">
              <div className="company-years">
                <span>8</span>
                <p>
                  лет на <br /> рынке
                </p>
              </div>
              <div className="line"></div>
              <div className="company-deals">
                <span>30K+</span>
                <p>
                  выполненных <br /> сделок
                </p>
              </div>
            </div>
          </div>
          <div className="border-square">
            <img src={bgSquare} alt="" />
          </div>
        </div>
      </section>

      <section className="why-us">
        <div className="container why-us__container">
          <div className="up-content">
            <h2 className="why-title">Почему мы?</h2>
            <p className="why-description">
              Откройте для себя преимущества, которые делают наше <br />
              агентство недвижимости непревзойденным выбором для вашей <br />
              недвижимостной потребности
            </p>
          </div>
          <div className="container">
            <div className="down-content">
              <div className="down-content__border">
                <img src={aboutFirstIcon} alt="firstIcon" />
                <h3>Профессионализм</h3>
                <p>
                  Наши опытные агенты предоставляют <br />
                  высококачественные услуги с учетом <br />
                  ваших потребностей
                </p>
              </div>
              <div className="down-content__border ">
                <img src={aboutSecondIcon} alt="secondIcon" />
                <h3>Широкий выбор недвижимости</h3>
                <p>
                  Мы предлагаем разнообразные <br />
                  объекты недвижимости, подходящие <br />
                  для различных целей — от жилья до <br />
                  коммерческой недвижимости
                </p>
              </div>
              <div className="down-content__border ">
                <img src={aboutThirdIcon} alt="thirdIcon" />
                <h3>Персональный подход</h3>
                <p>
                  Мы уделяем внимание каждому клиенту <br />
                  и разрабатываем индивидуальные <br />
                  стратегии
                </p>
              </div>
              <div className="down-content__border">
                <img src={aboutFourthIcon} alt="fourthIcon" />
                <h3>Прозрачность и доверие</h3>
                <p>
                  Мы ценим долгосрочные отношения и <br />
                  строим свою работу на основе <br />
                  честности и открытости
                </p>
              </div>
              <div className="down-content__border">
                <img src={aboutFifthIcon} alt="fifthIcon" />
                <h3>Экспертные консультации</h3>
                <p>
                  Мы предоставляем профессиональные <br />
                  советы по недвижимости и <br />
                  инвестициям
                </p>
              </div>
              <div className="down-content__border">
                <img src={aboutSixIcon} alt="sixIcon" />
                <h3>Отличная репутация</h3>
                <p>
                  Наше агентство недвижимости славится <br />
                  надежностью и успешными сделками
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-rates">
        <div className="container rates__container">
          <div className="up-content">
            <h2 className="rates-title">
              Наши <br /> тарифы
            </h2>
            <p className="rates-description">
              Преобразите свою повседневную среду с помощью этих трех различных{" "}
              <br />
              тарифов, предлагаемых по доступной цене. Каждый ценовой пакет
              может <br />
              быть настроен в соответствии с вашими пожеланиями.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="down-content">
            <div className="rates__inner-bg inner-one">
              <div className="rates__level level-one">
                <h2>стандарт</h2>
                <span>2.75%</span>
              </div>
              <div className="rates__info">
                <p>Экспертиза стоимости объекта</p>
                <p>Анализ рынка</p>
                <p>Предпродажная подготовка</p>
                <p>Проведение показов и переговоры с покупателями</p>
                <p>Комплексное юридическое сопровождение</p>
              </div>

              <button onClick={openModal}>Выбрать</button>
            </div>
            <div className="rates__inner-bg inner-two">
              <div className="rates__level level-two">
                <h2>максимум</h2>
                <span>2.95%</span>
              </div>
              <div className="rates__info">
                <p>Аванс в день обращения</p>
                <p>Комплексное управление</p>
                <p>Страхование ответственности</p>
                <p>Проведение показов и переговоры с покупателями</p>
                <p>Комплексное юридическое сопровождение</p>
              </div>

              <button onClick={openModal}>Выбрать</button>
            </div>
            <div className="rates__inner-bg inner-three">
              <div className="rates__level level-three">
                <h2>премиум</h2>
                <span>от 5.15%</span>
              </div>
              <div className="rates__info">
                <p>Выкуп по стоимости 85-90% от рынка</p>
                <p>Выход на сделку в течение 3-х дней</p>
                <p>Отсутствие рисков</p>
                <p>Проведение показов и переговоры с покупателями</p>
                <p>Комплексное юридическое сопровождение</p>
              </div>

              <button onClick={openModal}>Выбрать</button>
            </div>
          </div>
        </div>
      </section>

      <section className="profitability-calc">
        <div className="rect-patterns">
          <img
            className="pattern-rect__small-first"
            src={rectSmall}
            alt="small"
          />
          <br />
          <img className="pattern-rect__normal" src={rectNormal} alt="normal" />
          <br />
          <img
            className="pattern-rect__small-second"
            src={rectSmall}
            alt="small"
          />
        </div>
        <div className="container calc__container">
          <div className="calc-up__content">
            <h2 className="calc-title">
              калькулятор <br /> доходности
            </h2>
            <p className="calc-description">
              Поможем определить стоимость вашего жилья с учётом текущего <br />
              состояния рынка
            </p>
          </div>
        </div>
        <div className="container slide-pos">
          <SliderCalc />
          <ToastContainer />
        </div>
        <div className="diamond-pattern">
          <img src={diamondBg} alt="diamond" />
        </div>
      </section>

      <div className="our-services" id="services">
        <div className="container services__container">
          <div className="up-content">
            <h2 className="services-title">
              Наши <br /> услуги
            </h2>
            <p className="services-description">
              Наши услуги аренды недвижимости - это ваш ключ к комфортному и{" "}
              <br />
              удобному жилью. Мы готовы сделать ваш поиск максимально <br />
              комфортными
            </p>
          </div>
          <div className="down-content">
            <Slider />
          </div>
        </div>
        <img src={figureBg} alt="" />
      </div>

      <section className="consultation-section">
        <div>
          <div className="consultation-title">
            Нужна индивидуальная консультация?
          </div>
          <div className="consultation-text">
            Оставьте телефон и мы перезвоним вам в течение 30 минут
          </div>
        </div>
        <PhoneNumberInput />
      </section>

      <section className="our-projects" id="projects">
        <div className="container projects__container">
          <div className="up-content">
            <h2 className="projects-title">
              Наши <br /> проекты
            </h2>
            <p className="projects-description">
              Мы предоставляем разнообразные проекты, включая продажу <br />
              эксклюзивных жилых недвижимых объектов, управление инвестициями в{" "}
              <br />
              арендную недвижимость, а также поддержку покупки первого дома.
            </p>
          </div>
          <div className="container slide-hidden">
            <SlideToPercent />
          </div>
        </div>
      </section>

      <section className="our-reviews" id="reviews">
        <div className="container reviews__container">
          <div className="up-content">
            <h2 className="reviews-title">ОТЗЫВЫ</h2>
            <p className="reviews-description">
              Узнайте, что говорят о нас те, кто уже сделал выбор в пользу наших
              услуг
            </p>
          </div>
          <div className="container">
            <div className="down-content">
              <div className="down-content__border">
                <img src={firstPic} alt="firstPic" />
                <p>
                  Сотрудничество с агентством недвижимости было <br />
                  удивительным опытом! Их команда помогла мне <br />
                  найти мою мечтательную квартиру, и сделала все, <br />
                  чтобы сделка прошла гладко. Профессионализм и <br />
                  забота о клиентах на высшем уровне.
                </p>
                <div className="stars">
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                </div>
                <h3>Владимир</h3>
              </div>
              <div className="down-content__border">
                <img src={secondPic} alt="secondPic" />
                <p>
                  Я долго искала агентство недвижимости, которое <br />
                  могло бы продать мой дом быстро и по выгодной <br />
                  цене. С агентством, которое я выбрала, моя <br />
                  недвижимость была продана всего за несколько <br />
                  недель! Очень довольна результатом.
                </p>
                <div className="stars">
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                </div>
                <h3>Екатерина</h3>
              </div>
              <div className="down-content__border">
                <img src={thirdPic} alt="thirdPic" />
                <p>
                  Агентство недвижимости отлично управляет моими <br />
                  арендными объектами. Они всегда на связи, быстро <br />
                  реагируют на запросы арендаторов и обеспечивают <br />
                  стабильный доход от моих инвестиций. Рекомендую!
                </p>
                <div className="stars last-child">
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                  <img src={stars} alt="star" />
                </div>
                <h3>Антон</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__container">
          <div className="footer__up-content">
            <div className="logo">NewLuxe</div>
            <h2>
              Преврати мечту в <span>реальность</span>
            </h2>
            <div className="social-network">
              <a href="#!">
                <img src={vkIcon} alt="vk" />
              </a>
              <a href="#!">
                <img src={instagramIcon} alt="insta" />
              </a>
              <a href="#!">
                <img src={telegramIcon} alt="telega" />
              </a>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer__down-content">
            <ul>
              <li>
                <Link to="home" smooth={true} duration={1000}>
                  <a href="#!">Главная</a>
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={1000}>
                  <a href="#!">О компании</a>
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={1000}>
                  <a href="#!">Услуги</a>
                </Link>
              </li>
              <li>
                <Link to="projects" smooth={true} duration={1000}>
                  <a href="#!">Проекты</a>
                </Link>
              </li>
              <li>
                <Link to="reviews" smooth={true} duration={1000}>
                  <a href="#!">Отзывы</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-upper__down">
            <div className="footer__general-info">
              <div className="mail">
                <img src={mailIcon} alt="mail" />
                <p>LuxAgency@gmail.com</p>
              </div>
              <div className="location">
                <img src={locationIcon} alt="location" />
                <p>
                  г. Москва ул. Шоссе Энтузиастов, д. 61, к. 60 <br />
                  ОГРН: 1205000110732 ИНН: 5001136902
                </p>
              </div>
            </div>

            <div className="footer-button">
              <a href="#!">
                Перейти в Telegram для обсуждения
                <img src={submitBtn} alt="btn" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
