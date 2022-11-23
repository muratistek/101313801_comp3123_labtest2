import React, { useState } from 'react'
import './App.css';
import AreaDetailWeather from './AreaDetailWeather';
import AreaMainWeather from './AreaMainWeather';
import SearchArea from './SearchArea';


function App() {
  const [area, setArea] = useState('')
  const [apiData, setApiData] = useState({})

  return (
    <div className="app">

      <div className="container">
        <SearchArea location={area} setData={setApiData} setLocation={setArea} />
        <AreaMainWeather data={apiData} />
        <AreaDetailWeather data={apiData} />
      </div>
    </div>
  );
}

export default App;
