import { useState } from "react"
import './styles/WeatherCard.css'
import axios from 'axios'

const WeatherCard = ({ weather, temp})  => {
 
    const [isCelsius, setIsCelsius] = useState(true)
      const chanceTemperture = () => {
        setIsCelsius(!isCelsius)
    }
 
    return (
        <article className="weather">
            <h1 className="weather__title">WeatherCard</h1>
            <h2 className="weather__country">{weather?.name}, {weather?.sys.country}</h2>
            <section className="weather__body">
                <header className="weather_img">
                    <img className="weather__icon" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                </header>
                <article className="weather__condition">
                    <h3 className="weather_description">{weather?.weather[0].description}</h3>
                    <ul className="weather__list">
                        <li className="weather__item">
                        <span className="weather__label">Wind speed</span>
                        <span className="weather__value">{weather?.wind.speed}m/s</span></li>
                        <li className="weather__item">
                        <span className="weather__label">Clouds</span>
                        <span className="weather__value" >{weather?.clouds.all}%</span></li>
                        <li className="weather__item">
                        <span className="weather__label">Pressure</span>
                        <span className="weather__value">{weather?.main.pressure}hPa</span></li>
                        
                    </ul>
                    
                </article>
            </section>
            <section className="weather__principal">
                <h2 className="weather__temp">{ isCelsius ? `${temp?.celsius} °C`: `${temp?.fahrenheit} °F`}</h2>
            </section>
            <footer className="weather__footer">
                <button className="weather__btn" >Chance to F°/C°</button>
 
          
            </footer>
        </article>
  
  )
}

export default WeatherCard