import React from 'react'

export default function AreaDetailWeather({ data }) {
  return (
    <>
      {data.name !== undefined &&
        <div className="detailWeather">
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
            <p>Wind Speed</p>
          </div>
          <div className="feelsLike">
            {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}℃</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
            {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="pressure">
            {data.main ? <p className='bold'>{data.main.pressure}hPa</p> : null}
            <p>Pressure</p>
          </div>
        </div>}
    </>
  )
}
