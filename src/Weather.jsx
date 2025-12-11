import React, { useEffect, useState, CSSProperties } from 'react'
import WeatherBox from './componet/WeatherBox';
import WeatherButton from './componet/WeatherButton';
import { ClipLoader } from "react-spinners";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// 날씨 앱 만들기
// 1. 앱이 실행되자마자 현재 위치 기반의 날씨
// 2. 날씨 정보는 도시, 섭씨온도, 화씨온도, 날씨 상태
// 3. 5개의 버튼 (1개는 현재위치, 4개는 다른 도시)
// 4. 도시 버튼을 클릭하면 도시별 날씨 보여짐
// 5. 현재위치 버튼을 누르면 다시 현재 위치기반의 날씨가 보여짐
// 6. 로딩 스피너

const Weather = () => {

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);

  const cities = ['mongolia', 'new york', 'tokyo', 'seoul'];

  //현재위치
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeathByCurrentLocation(lat, lon); //let, lon 넘겨주기
      //console.log("현재위치", lat, lon);
    });
  }

  const getWeathByCurrentLocation = async(lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?&lat=${lat}&lon=${lon}&lang=kr&appid=51096a7efc95ca5f9fb21b908f3ca29f&units=metric`;
    setLoading(true);
    let response = await fetch(url); //await을 쓰려면 async 로 비동기 써야함
    let data = await response.json(); //api는 json
    // console.log(data);
    setWeather(data); //data 담기
    setLoading(false);
  }

  const getWeatherByCity = async() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=kr&appid=51096a7efc95ca5f9fb21b908f3ca29f&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  }

  // 현재 위치 날씨 보여주기
  const currentCity = (city) => {
    if (city === "current") {
      // setCity(null);
      setCity(""); // 여기서 null 말고 빈 문자열!
    } else {
      setCity(city);
    }
  }

  useEffect(() => {
    // console.log(city);
    if (city == "") {
      getCurrentLocation(); //현재위치
    } else {
      getWeatherByCity(); //다른도시
    }
  }, [city]); 

  return (
    <div className='weather-wrap'>
      { loading ? (
        <ClipLoader
          color="#0000ff"
          loading={loading}
          size={80}
        /> 
      ) : (
        <div className='weather'>
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} currentCity={currentCity} selectedCity={city} />
        </div>
      )}
    </div>
  )
}

export default Weather