import { useState, useEffect } from "react";

// API CALL
import { getWeatherByZip, imageURL } from '../helpers/weatherapi'


const Weather = () => {

    const [zipcode, setZipcode] = useState(8000)
    const [weather, setWeather] = useState()
    const [error, setError] = useState()

    useEffect(() => {
        if (zipcode > 999 && zipcode < 10000) {
            getWeatherByZip(zipcode).then(data => {
                console.log(data)
                setWeather(data);
                setError();

            }).catch(err => {
                console.log(err)
                setError(err)
                setWeather();
            })
        }
    }, [zipcode]);

    const upperCase = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    //#region Start doc
    return (
        <div>
            <h1>City Weather</h1>

            <h3>Input zipcode and get weather</h3>
            <input type="text" onChange={(e) => setZipcode(parseInt(e.target.value))} />
            {
                weather &&
                <div>
                    <h1>{weather.name}</h1>
                    <p><b>{upperCase(weather.weather[0].description)}</b></p>
                    <p>Temperature: <b>{weather.main.temp}°C</b></p>
                    <img alt={weather.weather[0].description} src={imageURL + weather.weather[0].icon + "@2x.png"} />

                </div>
            }
            {
                !weather && !error &&
                <div>
                    <h1>Loading...</h1>
                </div>
            }
            {
                error &&
                <div>
                    <h1>Error: {error}</h1>
                </div>
            }
        </div>
    );
    //#endregion
};

export default Weather;