import React, { useState, useEffect } from "react";
import Wheather from '../Assets/images/weather.svg';

const Image = () => {
    const [temp,setTemp] = useState('');
    const [city,setCity] = useState('');

        const search = async () =>{
        
            const element = document.querySelector(".input").value;
            if(element === ""){
                return 0;
            }else{
                const apiKey = '1e251222200b5391bec03eb7000becd9';
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${element}&appid=${apiKey}`);
                const data = await response.json();
                setTemp(Math.floor(data.main.temp - 272.15));
            }
             setCity(element);
          
        }


  return (
    <div className="wheather ">
   
<div className="bg">
<input type="text" className="input" />
        <button onClick={search} className="btn-search">Search</button>
    <div className="wheather-data">
    <img  src={Wheather} alt="" />
    {city.length > 0 ? (
        <div>
          <h1 className="temp">{temp}</h1>
          <h1 className="city-name">{city}</h1>
        </div>
      ) : (
        <p>Please enter a city name in the input above.</p>
      )}
     
    </div>
</div>

    </div>
  );
};

export default Image;
