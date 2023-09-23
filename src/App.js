import SliderCalc from "./components/sliderCalc/SliderCalc.jsx";
import Slider from "./components/slider/Slider.jsx";
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

  // OUR-SERVICES IMAGES
  // arrowLeft,
  // arrowRight,
  // firstServicesPic,
  // secondServicesPic,
  // thirdServicesPic,
} from "./assets/image/index.js";
import rectSmall from "./assets/image/icons/bg-react-small.png";
import rectNormal from "./assets/image/icons/bg-rect.png";
import thinkingMan from "./assets/image/about/thinking-man.png";
import bgSquare from "./assets/image/icons/bg-border-square.png";
import logo from "./assets/image/logo.svg";
import callbtn from "./assets/image/call.svg";
import "./assets/css/style.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__inner">
          <div className="container">
            <img className="logo" src={logo} alt="logo" />
            <nav className="header__nav">
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
            <img className="callbtn" src={callbtn} alt="callbtn" />
          </div>
        </div>
        <h1>агентство недвижимости</h1>
        <h2>Лучшие идеи – Лучшее решение – Лучший результат</h2>
        <div className="center-content">
          <button className="order-btn">заказать консультацию</button>
        </div>
      </header>

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
            </div>
            <div className="team-member">
              <img src={wellSofi} alt="wellSofi" />
              <p className="team-member-name">Well Sofi</p>
            </div>
            <div className="team-member">
              <img src={ruslan} alt="ruslan" />
              <p className="team-member-name">Руслан</p>
            </div>
            <div className="team-member">
              <img src={anna} alt="anna" />
              <p className="team-member-name">Анна</p>
            </div>
            <div className="team-member">
              <img src={igorek} alt="igorek" />
              <p className="team-member-name">Игорёк</p>
            </div>
            <div className="team-member">
              <img src={antosha} alt="antosha" />
              <p className="team-member-name">Антоша</p>
            </div>
            <div className="team-member">
              <img src={vitaminka} alt="Витаминка" />
              <p className="team-member-name">Витаминка</p>
            </div>
            <div className="team-member">
              <img src={muslim} alt="Муслим" />
              <p className="team-member-name">Муслим</p>
            </div>
            <div className="team-member">
              <img src={antonodzhi} alt="Антоноджи" />
              <p className="team-member-name">Антоноджи</p>
            </div>
            <div className="team-member">
              <img src={vladik} alt="Владик" />
              <p className="team-member-name">Владик</p>
            </div>
            <div className="team-member">
              <img src={andrusha} alt="Андрюша" />
              <p className="team-member-name">Андрюша</p>
            </div>
            <div className="team-member">
              <img src={platina} alt="Платина" />
              <p className="team-member-name">Платина</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-company">
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

              <button>Выбрать</button>
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

              <button>Выбрать</button>
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

              <button>Выбрать</button>
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
        <div className="container">
          <SliderCalc />
        </div>
      </section>

      <div className="our-services">
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
      </div>
    </div>
  );
}

export default App;
