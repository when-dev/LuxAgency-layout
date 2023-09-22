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

      
    </div>
  );
}

export default App;
