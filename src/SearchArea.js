import React from 'react'
import axios from 'axios'

export default function SearchArea({ location, setLocation, setData }) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=6c3c2c685402e2b08a2388c06ec1b8f1`

  const searchArea = e => {
    if (e.key === "Enter") {
      axios.get(url).then(res => {
        setData(res.data)
        console.log(res.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="search">
      <input
        type="text"
        onKeyDown={searchArea}
        onChange={e => setLocation(e.target.value)}
        placeholder="Enter City Name"
        value={location}
      />
    </div>
  )
}
