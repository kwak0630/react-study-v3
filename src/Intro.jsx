import { Link, useNavigate } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Intro = () => {
  const navigate = useNavigate();
  const goToWeather = () => {
    navigate("/Weather");
  }
  return (
    <div className="intro">
      <div className='logo'>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        +
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="intro-box">
        <Link to="/RockScissorsPaper">Chapter 1. 가위바위보 게임</Link>
        <button onClick={goToWeather}>
          Chapter 2. 날씨 앱
        </button>
        <Link to="/Product">Chapter 3. 쇼핑몰</Link>
        <Link to="/PhoneBook">Chapter 4. 연락처(Zustand)</Link>
        <Link to="/PhoneBook">Chapter 5. 연락처(Redux)</Link>
      </div>
      <p className="copy">@sally</p>
    </div>
  )
}

export default Intro
