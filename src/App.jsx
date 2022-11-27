import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'

function App() {
  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCelsius, setIsCelsius] = useState(true)

  const changeUnit = () => setIsCelsius(!isCelsius)
// aqui optenemos cordenadas de la api 
  const success = (posit) => {
      const newCoords = {
        lati: posit.coords.latitude,
        long: posit.coords.longitude 
      }
      setCoords(newCoords)
    }

    useEffect(() => {
      navigator.geolocation.getCurrentPosition(success)
    }, [])

// -------------------- peticion del clima a la api despues de localizacion   

    useEffect(() => {
    if (coords){
      const API_KEY = "ef1f1517eed978481f69db8362498b76"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lati}&lon=${coords.long}&appid=${API_KEY}`
      axios.get(URL)
        .then(res =>{ 
          const tempKel = res.data.main.temp
          const tempCel = (tempKel-273.15).toFixed(1)
          const tempFahren =(( tempCel * 9/5) +32).toFixed(0)
          const newTemperature = {
            celcius: tempCel,
            Fahrenheit: tempFahren
          }
          setTemperature(newTemperature)
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
    }, [coords])

  return (
    <div className="App">
      {
        weather ? <WeatherCard weather={weather} temperature={temperature} changeUnit={changeUnit} isCelsius={isCelsius}/> : <p>loading...</p>
      }
    </div>
  )
}

export default App
