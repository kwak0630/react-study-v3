import React, { useState } from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({cities, setCity, currentCity, selectedCity}) => {
  // console.log(cities);
  return (
    <div className='weather-button'>
      <Button 
        variant={`${selectedCity === "" ? "dark" : "outline-dark"}`}
        onClick={() => currentCity("current")}
      >현재위치</Button>
      {cities.map((city, index) => (
        <Button 
          variant={`${selectedCity === city ? "light" : "outline-light"}`}
          key={index} 
          onClick={() => setCity(city)}
        >{city}</Button>
      ))}
    </div>
  )
}

export default WeatherButton