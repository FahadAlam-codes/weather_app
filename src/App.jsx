import { useState } from 'react';
import axios from 'axios';
import './App.css';
import TopPart from './TopPart.jsx';

function App() {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  
  
   const [city, setCity] = useState('');
   const [con, setCon] = useState('');
   const [dateTxt, setDatetxt] = useState('');



   const getWeather = async (cityName) => { // Accept cityName as an argument
     try {
       if (!cityName) {
         alert('Please enter a city');
         return;
       }

       const weatherAPI = `https://api.openweathermap.org/data/2.5/forecast?units=metric&q=${cityName}&appid=5e034421b58664a2029f506536770be7`;

       const tempData = await axios.get(weatherAPI);

       setCity(tempData.data.city.name); // Update state with city name
       setCon(tempData.data.city.country); // Update state with country name
       setDatetxt(tempData.data.list[0].dt_txt.split(" ")[0]); //gives yyyy-mm-dd
       const dMonth = new Date(dateTxt);
       let month = months[dMonth.getMonth()];

       console.log(tempData);
       console.log(dateTxt);
       
     } catch (error) {
       console.log(error);
       alert('City not found');
     }
   };

  return (
    <>
      {/* main div */}
      <div className="border border-amber-400 w-full h-screen">
        <TopPart getWeather={getWeather} city={city} con={con}/> {/* ✅ Pass function & city */}
      </div>
    </>
  );
}

export default App;
