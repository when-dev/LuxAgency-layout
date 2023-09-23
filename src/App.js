import {
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
} from "./assets/image/index.js";
import thinkingMan from "./assets/image/about/thinking-man.png";
import bgSquare from './assets/image/icons/bg-border-square.png';
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
    </div>
  );
}

export default App;
