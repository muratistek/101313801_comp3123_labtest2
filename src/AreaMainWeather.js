import React from 'react'

export default function AreaMainWeather({ data }) {
  return (
    <>
      <div className="mainWeather">
        <div className="location">
          {data.sys ? <h1> {data.name}, {data.sys.country} </h1> : null}
        </div>
        <div className="temperature">
          {data.main ? <h1>{data.main.temp.toFixed()}℃ </h1> : null}
        </div>
        <div className="icon">
          {data.weather ? <img id="weather-icon" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Weather icon"></img> : null}
        </div>
        <div className="description">
          {data.weather ? <p>{data.weather[0].main}</p> : null}
        </div>
      </div>
    </>
  )
}
