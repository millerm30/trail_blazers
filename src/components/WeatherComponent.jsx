import React, { useState, useEffect } from 'react';

export default function WeatherComponent() {
  let lat = 48.4999;
  let lon = -53.49808;
  let apiKey = '774150fdf98db0b4a2d36904c6b51a62';
  let apiAddress = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(apiAddress);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeatherData();
  }, []);

  return (
    <aside className="col-span-2 row-span-1 bg-white lg:mt-10 mb-6 p-4 lg:rounded-l-lg border-t-[1px] border-l-[1px] border-b-[1px] border-gray-300 lg:ml-4 text-black md:col-span-1 lg:col-span-1">
      <div className="flex justify-around">
        <div className="text-center">
          <img src={`http://openweathermap.org/img/w/${weatherData?.weather?.[0].icon}.png`} alt={weatherData?.weather?.[0]?.description} className="w-20 inline" />
          <p className="uppercase font-bold">{weatherData?.weather?.[0]?.description}</p>
          <span className="flex flex-col justify-between py-2">
            <p className="font-bold">Current Temp:</p>
            <span className="flex justify-center">
              <p className="text-5xl font-bold py-2">{weatherData?.main?.temp.toFixed()}</p>
              <sup className="text-xl font-bold py-2">&deg;C</sup>
            </span>
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold py-2">Local Weather</h2>
          <span className="flex justify-between py-2">
            <p className="font-bold">Location:</p>
            <p>Plate Cove</p>
          </span>
          <span className="flex justify-between py-2">
            <p className="font-bold">High:</p>
            <p>{weatherData?.main?.temp_max.toFixed()} <span className="font-bold">&deg;C</span></p>
          </span>
          <span className="flex justify-between py-2">
            <p className="font-bold">Humidity</p>
            <p>{weatherData?.main?.humidity} <span className="font-bold">%</span></p>
          </span>
          <span className="flex justify-between py-2">
            <p className="font-bold">Feels Like:</p>
            <p>{weatherData?.main?.feels_like.toFixed()} <span className="font-bold">&deg;C</span></p>
          </span>
        </div>
      </div>
    </aside>
  );
};

