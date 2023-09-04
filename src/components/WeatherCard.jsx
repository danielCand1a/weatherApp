import { useState } from "react";

const WeatherCard = ({weather,temp}) => {
    
    const [isCelsios, setIsCelsios] = useState(true)
    const handleChangeTemp = () => setIsCelsios(!isCelsios)
    
  return (//encadenamiento opcional = para no leer undefined 
  //  && no lee nada de la derecha si no tiene informacion
    <article className="card__climate">
      <h1>Weather App</h1>
      <h2>{weather?.name}, {weather?.sys.country}</h2> 
      <div className="information">
        <div>
          <img 
          src={weather && `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" 
          />
        </div> 
        <section className="description">
          <h3>{weather?.weather[0].description}</h3>
          <ul>
            <li><strong>Wind Speed: </strong>{weather?.wind.speed} m/s</li>
            <li><strong>Clouds: </strong>{weather?.clouds.all} %</li>
            <li><strong>Pressure: </strong>{weather?.main.pressure} hPa</li>
          </ul>
        </section>
      </div>
      <h2>{isCelsios ? `${temp?.celsius} °C`: `${temp?.farenheit} °F`}</h2>
      <button onClick={handleChangeTemp}>{isCelsios ? 'Change to °F' : 'Change to °C'}</button>
    </article>
  )
}

export default WeatherCard