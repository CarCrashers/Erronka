import React, { useState, useEffect } from 'react';
import './weather.css';

function Weather() {
  const [weather, setWeather] = useState(null);

  const DEFAULT_LAT = 43.3183;
  const DEFAULT_LON = -1.9761;

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=Europe/Madrid`
        );
        
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        let cityName = "Donostia (Lehenetsia)";
        try {
            if (lat !== DEFAULT_LAT) {
                const cityRes = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=eu`);
                const cityData = await cityRes.json();
                cityName = cityData.locality || cityData.city || "Zure Kokapena";
            }
        } catch (e) {
            console.log("Ezin izan da herriaren izena lortu");
        }
        
        if (isMounted && data && data.current) {
          const current = data.current;
          setWeather({
            temp: Math.round(current.temperature_2m),
            code: current.weather_code,
            icon: getWeatherIcon(current.weather_code),
            location: cityName
          });
        }
      } catch (error) {
        console.error('Error al obtener el clima:', error);
      }
    };

    const initWeather = () => {
        const savedLocation = JSON.parse(localStorage.getItem('user_location'));

        if (savedLocation && savedLocation.lat && savedLocation.lon) {
            console.log("Usando ubicación guardada en LocalStorage.");
            fetchWeather(savedLocation.lat, savedLocation.lon);
        } 
        else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    fetchWeather(position.coords.latitude, position.coords.longitude);
                },
                (error) => {
                    console.warn("Ubicación denegada. Usando Donostia.");
                    fetchWeather(DEFAULT_LAT, DEFAULT_LON);
                }
            );
        } else {
            fetchWeather(DEFAULT_LAT, DEFAULT_LON);
        }
    };

    initWeather();
    
    const interval = setInterval(initWeather, 600000);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  if (!weather) {
    return (
      <div className="weather-widget" title="Kargatzen...">
        <i className="bi bi-cloud-arrow-down"></i>
        <span className="temp">--°</span>
      </div>
    );
  }

  return (
    <div className="weather-widget" title={`Kokapena: ${weather.location} | Tenperatura: ${weather.temp}°C`}>
      <i className={`bi ${weather.icon}`}></i>
      <span className="temp">{weather.temp}°</span>
    </div>
  );
}

function getWeatherIcon(code) {
  if (code === 0) return 'bi-sun-fill';
  if (code === 1 || code === 2) return 'bi-cloud-sun';
  if (code === 3) return 'bi-clouds';
  if (code === 45 || code === 48) return 'bi-cloud-haze';
  if (code >= 51 && code <= 55) return 'bi-cloud-rain';
  if (code >= 61 && code <= 67) return 'bi-cloud-rain-fill';
  if (code >= 71 && code <= 77) return 'bi-snow';
  if (code >= 80 && code <= 82) return 'bi-cloud-rain-fill';
  if (code >= 85 && code <= 86) return 'bi-snow';
  if (code >= 95 && code <= 99) return 'bi-cloud-lightning-rain';
  return 'bi-cloud-question';
}

export default Weather;