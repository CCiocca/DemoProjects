//this piece renders city cards, onclick it gets the lat and long of that city from the store and it saves them in the queryLatLon store


import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setResultsQueryLatLon } from '../../redux/queryLatLonSlice'
import { setResultsWeather } from '../../redux/weatherSlice'
import { setResultsForecast } from '../../redux/forecastSlice'


const ResultsPlaces = () => {
    const resultsCoordinates = useSelector((state)=> state.coordinates) 
    const resultsWeather = useSelector((state)=> state.weather)
    const resultsForecast = useSelector((state)=>state.forecast) // this gets the resultsForecast from the redux store


    const dispatch = useDispatch(); //this allows to store new data in the redux store
    const navigate = useNavigate(); //this allows to navigate through the pages 

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'  //to access the api

    
    //onClick, this function fetches the data based on city query 
    const fetchData = async (city) => {
        dispatch((setResultsQueryLatLon(city)));     // this dispatch  is not mandatory since I use the saved parameters in this page, where i also get them. I chose to dispatch in case of future app development, in the eventuality of using them in another component which requires an API call
        fetchDataWeather(city)
        fetchDataForecast(city)
        navigate(`/data/2.5/weather/${city.name}`)  //navigates to choose city element
    }
    
    //this fetch takes the city obj and gets the parameters needed to proceed with the API call
    const fetchDataWeather = async (city) => {
        const latit = city.lat.toFixed(2)   //the url requires 2 decimal numbers, not more, so this number has to be fixed 
        const longit = city.lon.toFixed(2)
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${latit}&lon=${longit}&appid=${APIkey}&units=metric` //api to get the weather based on the coordinates
        try {
            const res = await fetch(urlWeather);
            if (res.ok) {
                const data = await res.json();
                dispatch(setResultsWeather(data));    //the fetched data are dispatched and saved in the store   
            }
        }
        catch (err) {
            console.log(err)
        }
    };   
    
    //same as above, different URL
    const fetchDataForecast = async (city) => {
        const latit = city.lat.toFixed(2)   
        const longit = city.lon.toFixed(2)
        const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${latit}&lon=${longit}&appid=${APIkey}&units=metric` // api to populate forecast elements
        try {
            const res = await fetch(urlForecast);
            if (res.ok) {
                const data = await res.json();
                dispatch(setResultsForecast(data));     //the fetched data are dispatched and saved in the store
            }    //the else here is covered by the previous fetchDataWeather which opens an error modal, I don't repeat it here else there will be 2 modals for each wrong input
        }
        catch (err) {
            console.log(err)
        }
    };

    return(
        <Row className='d-flex flex-column'>
            <h5>Select a city</h5>

        {/* the cities, with relative coordinates, are now stored in "resultsCoord" and are mapped in the page so the user can select the desired one */}
        {resultsCoordinates.map((city, index)=> (
            
                <div key={index} className="rounded cardsCity p-4 my-2 g-1 text-start divCity mx-auto" onClick={()=> fetchData(city) }>
                <Row>
                    <Col className="col-4">{city.name}</Col>
                    <Col className="col-6">{city.state}</Col>
                    <Col className="col-2">{city.country}</Col>
                </Row>
                </div>
            )
        )}

        </Row>
        )

    
}

export default ResultsPlaces


