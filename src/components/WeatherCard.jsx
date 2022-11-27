import React from 'react'

const WeatherCard = ({weather, temperature, changeUnit, isCelsius}) => {
  console.log(weather)
  return (
    <article className='weatherCard'>
      <h1>Clima</h1>
      <h3>{`${weather.name}, ${weather.sys.country}`}</h3>
        <section>
            <div>
                <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
            </div>
            
            <ul>
                <li> <p>"{`${weather.weather[0].description}`}"</p> </li>
                <li> <p>Vel viento: <span> {`${weather.wind.speed}`} m/s</span></p> </li>
                <li> <p> Nuves: <span> {`${weather.clouds.all}`}% </span></p></li>
                <li> <p>Presion: <span>{`${weather.main.pressure}`} mBar</span></p> </li>
            </ul>
        </section>
        <p className='temper'>{isCelsius ? `${temperature.celcius} °C` : `${temperature.Fahrenheit}°F`}</p>
        <button onClick={changeUnit}>Grados °F / °C</button>
    </article>
  )
}

export default WeatherCard