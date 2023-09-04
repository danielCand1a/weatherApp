
import { useEffect ,useState } from 'react';
import './App.css'
import axios from 'axios';
import WeatherCard from './components/WeatherCard';

function App() {

  const [coords, setCoords] = useState() // underfined al comienzo
  const [weather, setWeather] = useState()
  const [temp, setTemp] = useState()

  useEffect(()=>{
    const success = pos => { // despues que llegue la respuesta 
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(obj)
    }
  
    navigator.geolocation.getCurrentPosition(success)
  },[])

  useEffect(() => { //corre en su nacimiento y cada ves que coords cambie su valor.
    if(coords){
      const Apikey = "3e835e61a1cd6e35897576957c65755d"
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${Apikey}`
      axios.get(url)
      .then(res => {
        setWeather(res.data)
        const obj = {
          celsius: (res.data.main.temp - 273.15).toFixed(2),
          farenheit: ((res.data.main.temp -273.15) * 9/5 + 32).toFixed(2)
        }
        setTemp(obj)
      })
      .catch(err => console.log(err))
    }
  },[coords])

  const bgStyle = {
    backgroundImage: `url(/sky.png)`
  }
  return (
    <div style={bgStyle} className='container'>
      <WeatherCard 
        weather = {weather}
        temp = {temp}
      />
    </div>
  )
}

export default App
