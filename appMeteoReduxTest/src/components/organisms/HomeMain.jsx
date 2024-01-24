import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setResultsWeather } from "../../redux/weatherSlice";
import { setResultsForecast } from "../../redux/forecastSlice";
import WeatherMain from "./WeatherMain";
import { useState } from "react";
import ForecastMain from "./ForecastMain";
import { ErrorMessageQuery } from "../molecules/ErrorMessageQuery";


const HomeMain = () => {
    const [query, setQuery] = useState('')

    const [showModal, setShowModal] = useState(false);    //this modal pops up when the query is not a valid search parameter for the API

    // I substitute the useState with the useSelector which get the values of the states from the store, I use dispatch to update the state values
    
    const resultsWeather = useSelector((state)=>state.weather) // this gets the resultsWeather from the redux store
    const resultsForecast = useSelector((state)=>state.forecast) // this gets the resultsForecast from the redux store
    const dispatch = useDispatch(); //this allows to store new data in the redux store
    

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'

    const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${APIkey}&units=metric` //api to populate weather elements

    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${APIkey}&units=metric` // api to populate forecast elements

    //When the user writes in the input, the query value gets updated
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    //onClick, this function fetches the data based on city query 
    const fetchData = () => {
        fetchDataWeather()
        fetchDataForecast()
        setQuery('')//to empty the search field when the search is done
        }


    const fetchDataWeather = async () => {
        try {
            const res = await fetch(urlWeather);
            console.log(urlWeather);
            if (res.ok) {
                const data = await res.json();
                dispatch(setResultsWeather(data))    //the fetched data are dispatched and saved in the store            
            } else {
                setShowModal(true)
            }
        }
        catch (err) {
            console.log(err)
        }
    };

    const fetchDataForecast = async () => {
        try {
            console.log(urlForecast)
            const res = await fetch(urlForecast);
            if (res.ok) {
                const data = await res.json();
                console.log(data);
                dispatch(setResultsForecast(data));     //the fetched data are dispatched and saved in the store
                console.log("io sono lo store forecast", resultsForecast)
            }    //the else here is covered by the previous fetchDataWeather which opens an error modal, I don't repeat it here else there will be 2 modals for each wrong input
        }
        catch (err) {
            console.log(err)
        }
    };


    //this allows to dismiss the modal. It also closes when the user clics outside the modal
    const handleCloseModal = () => {
        setShowModal(false)
      }


    return(
        <>
        <Container>
            <Row className="d-flex flex-column flex-md-row justify-content-between"> 
                <Col className=" mb-1">
                    <h1 className="fs-2">MoodieWeather</h1>
                </Col>
            
                <Col className="mx-auto mb-4 d-flex justify-content-around col-md-8">
                <Form className="mx-auto d-flex"
                    onSubmit={(e) => {
                        e.preventDefault(); // to avoid form submit when user clicks enter key
                        fetchData(); // to fetchData when user clicks Enter key
                      }}>
                    <Form.Control
                                type="text"
                                placeholder="Search a city"
                                className="mx-2"
                               
                                value={query} 
                                onChange={handleChange}
                                />

                    <Button type="button" variant="outline-light" onClick={() => fetchData()}>Search</Button> 
                    {/* this button calls the function fetchData at onClick */}
                </Form>
                    </Col>
            </Row>
            <ErrorMessageQuery
                  show={showModal}
                  handleCloseModal={handleCloseModal}
                  /> 
                  {/* these props are passed to the component */}

                
                                        
        {resultsWeather.name !== "" &&

        <>
            <Row className="mx-auto mt-3 p-0">
                <Col className="col-12">
                <h2 className="bold big">{resultsWeather.name}</h2>
                </Col>

                <Col className="col-6"> <p className="display-3 semibold">{resultsWeather.main?.temp.toFixed()} °C</p></Col>
                {/* toFixed aproximates the decimals, in this case the setting is no decimals */}

                <Col className="col-6"> <p className="display-3 semibold">{resultsWeather.weather[0]?.main}</p></Col>
                {/* this gets inside the resultsWeather, gets the first(and only) element of the  weather array checking if it exists and then it gets to the property main*/}
                <WeatherMain/>
                <ForecastMain />   
                                  
            </Row>
        </>
        }
                    
        </Container>
        </>
    )
}

export default HomeMain