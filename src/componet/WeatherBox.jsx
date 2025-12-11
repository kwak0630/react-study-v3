import React from 'react'

const WeatherBox = ({weather}) => {
  //console.log(weather)

  return (
    <div className='weather-box'>
      <p className='city'>📍 {weather?.name}</p>
      <p className='info'>
        <span className="current">{weather?.main?.temp}°</span><br/>
        <span className="min">최저 {weather?.main?.temp_min}°</span> / <span className='max'>최고 {weather?.main?.temp_max}°</span></p>
      <p className='description'>{weather?.weather[0]?.description}</p>
    </div>
  )
}

export default WeatherBox