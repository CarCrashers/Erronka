import React, { useState, useEffect } from 'react';
import './weather.css';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      try {
        console.log('Iniciando fetch de clima...');
        
        // Usando Open-Meteo que es completamente libre
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=43.3183&longitude=-1.9761&current=temperature_2m,weather_code&timezone=Europe/Madrid'
        );
        
        console.log('Response status:', response.status);
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Datos del clima:', data);
        
        if (isMounted && data && data.current) {
          const current = data.current;
          setWeather({
            temp: Math.round(current.temperature_2m),
            code: current.weather_code,
            icon: getWeatherIcon(current.weather_code)
          });
          console.log('Estado del clima actualizado');
        }
      } catch (error) {
        console.error('Error al obtener el clima:', error);
      }
    };

    fetchWeather();
    
    // Actualizar cada 10 minutos
    const interval = setInterval(fetchWeather, 600000);
    
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Mostrar widget con datos o placeholder
  if (!weather) {
    return (
      <div className="weather-widget" title="Cargando clima...">
        <i className="bi bi-cloud"></i>
        <span className="temp">--°</span>
      </div>
    );
  }

  return (
    <div className="weather-widget" title={`Temperatura: ${weather.temp}°C`}>
      <i className={`bi ${weather.icon}`}></i>
      <span className="temp">{weather.temp}°</span>
    </div>
  );
}

function getWeatherIcon(code) {
  // WMO Weather interpretation codes
  // 0 = Clear sky
  // 1,2 = Mostly clear, partly cloudy
  // 3 = Overcast
  // 45,48 = Foggy
  // 51,53,55 = Drizzle
  // 61,63,65 = Rain
  // 71,73,75 = Snow
  // 77 = Snow grains
  // 80,81,82 = Rain showers
  // 85,86 = Snow showers
  // 95,96,99 = Thunderstorm
  
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
