import React, { useState, useEffect } from 'react';
import './weather.css';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchWeather = async () => {
      try {
        console.log('Fetching weather from wttr.in...');
        
        // Using wttr.in API which doesn't require authentication
        const response = await fetch(
          'https://wttr.in/Donostia?format=j1',
          {
            headers: {
              'Accept': 'application/json',
              'User-Agent': 'Mozilla/5.0'
            }
          }
        );
        
        console.log('Response status:', response.status, response.statusText);
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        console.log('Weather data received:', data);
        
        if (isMounted && data && data.current_condition && data.current_condition[0]) {
          const current = data.current_condition[0];
          setWeather({
            temp: Math.round(current.temp_C),
            description: current.weatherDesc[0].value,
            icon: getWeatherIconFromDescription(current.weatherDesc[0].value)
          });
          console.log('Weather state updated successfully');
        } else {
          console.warn('Missing required weather data fields');
        }
      } catch (error) {
        console.error('Weather fetch error:', error);
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
    <div className="weather-widget" title={`${weather.description} - ${weather.temp}°C`}>
      <i className={`bi ${weather.icon}`}></i>
      <span className="temp">{weather.temp}°</span>
    </div>
  );
}

function getWeatherIconFromDescription(description) {
  const desc = description.toLowerCase();
  
  if (desc.includes('sunny') || desc.includes('clear')) return 'bi-sun-fill';
  if (desc.includes('cloud')) return 'bi-cloud';
  if (desc.includes('rain') || desc.includes('drizzle')) return 'bi-cloud-rain-fill';
  if (desc.includes('thunder') || desc.includes('storm')) return 'bi-cloud-lightning-rain';
  if (desc.includes('snow')) return 'bi-snow';
  if (desc.includes('fog') || desc.includes('mist')) return 'bi-cloud-haze';
  if (desc.includes('overcast')) return 'bi-clouds';
  if (desc.includes('partly')) return 'bi-cloud-sun';
  if (desc.includes('night')) return 'bi-moon-fill';
  
  return 'bi-cloud-question';
}

export default Weather;
