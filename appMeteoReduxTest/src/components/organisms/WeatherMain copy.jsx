import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";


const WeatherMain = () => {

    // const [results, setResults] = useState([])

    // const [lat, setLat] = useState('')
    // const [lon, setLon] = useState('')


    // const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'
    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`

    // const fetchData = async () => {
    //     try {
    //         console.log(url)
    //         const res = await fetch(url);
    //         if (res.ok) {
    //             const data = await res.json();
    //             console.log(data);
    //             setResults(data)
                
    //         } else {
    //             alert('No results')
    //         }
    //     }
    //     catch (err) {
    //         console.log(err)
    //     }
    // }

    // useEffect(()=> {
    //     setLat(place.lat);
    //     setLon(place.lon);
    //     console.log(lat);
    //     fetchData();
    // }, [])


    return(
        <>
        <Container className="container">
            <div>
                <h2 className="display-1">City</h2>
            </div>
            <div>
                <h3>place.weather.main</h3>
            </div>
            <div>
                <h4>place.weather.description</h4>
            </div>
            <div>
                <h3>place.main.temp °C</h3>
            </div>
            <div>
                <p>Perceived temperature place.main.feels_like °C</p>
            </div>
            <div>
                <p>Min place.main.temp_min °C</p>
            </div>
            <div>
                <p>Max place.main.temp_max °C</p>
            </div>
            <div>
                <p>Pressure place.main.pressure bar</p>
            </div>
            <div>
                <p>Humidity place.main.humidity %</p>
            </div>
            <div>
                <p>Wind speed place.wind.speed km/h</p>
            </div>
            <div>
                <p>Clouds place.clouds.all %</p>
            </div>
        </Container>
        </>
    )
}

export default WeatherMain


// {
//     "coord": {
//         "lon": -2.15,
//         "lat": 57
//     },
//     "weather": [
//         {
//             "id": 804,
//             "main": "Clouds",
//             "description": "overcast clouds",
//             "icon": "04d"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 277.59,
//         "feels_like": 272.64,
//         "temp_min": 277.25,
//         "temp_max": 278.53,
//         "pressure": 1008,
//         "humidity": 79,
//         "sea_level": 1008,
//         "grnd_level": 1008
//     },
//     "visibility": 10000,
//     "wind": {
//         "speed": 7.85,
//         "deg": 232,
//         "gust": 12.66
//     },
//     "clouds": {
//         "all": 100
//     },
//     "dt": 1705677014,
//     "sys": {
//         "type": 2,
//         "id": 2031790,
//         "country": "GB",
//         "sunrise": 1705653074,
//         "sunset": 1705680396
//     },
//     "timezone": 0,
//     "id": 2641549,
//     "name": "Newtonhill",
//     "cod": 200
// }