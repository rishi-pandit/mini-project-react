import SearchBox from "./searchBox"
import InfoBox from "./infoBox"
import { useState } from "react";


export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        feelsLike: 23.81,
        humidity: 53,
        temp: 23.97, 
        tempMax: 23.97,
        tempMin: 23.97,
        weather: "haze"
    });

    let updateInfo= (newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
    <div style={{textAlign: "center"}}>
        <h1>Rishi Weather App</h1>
         <SearchBox updateInfo={updateInfo}/>
         <InfoBox info={weatherInfo} />
    </div>
    
)
}