import { useSelector } from "react-redux"
import { Col } from "react-bootstrap";



const WeatherMain = () => {
    const resultsWeather = useSelector((state)=>state.weather) // this gets the resultsWeather from the redux store

    return(
        <>
        <h5 className="mt-2">Today</h5>
        <Col className="d-flex flex-wrap justify-content-between p-0 gap-1">
                    
            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 ">

                    <Col className="col-2" >
                        <i className="fa-solid fa-wind fs-3"></i>
                    </Col>
                    <Col className="col-8">
                        <p className="m-0 rem08">Wind speed</p>
                        <p className="m-0">{resultsWeather.wind?.speed} km/h</p>
                    </Col> 
            </Col>

            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 ">

                    <Col className="col-2" >
                        <i className="fa-solid fa-temperature-three-quarters fs-3"></i>
                    </Col>
                    <Col className="col-8">
                        <p className="m-0 rem08">Temperature</p>
                        <p className="m-0">{resultsWeather.main?.temp_min.toFixed()}°C - {resultsWeather.main?.temp_max.toFixed()}°C</p>
                        {/* toFixed aproximates the decimals, in this case the setting is no decimals */}

                    </Col> 
            </Col>
            

            
            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 " >

                    <Col className="col-2" >
                        <i className="fa-solid fa-cloud-rain fs-3"></i>
                    </Col>
                    <Col className="col-8">
                        <p className="m-0 rem08">Rain chance</p>
                        <p className="m-0">{resultsWeather.clouds.all} %</p>
                    </Col> 
            </Col>

            <Col className="rounded cardsBackground d-flex p-2 align-items-center my-2 ">

                    <Col className="col-2" >
                        <i className="fa-solid fa-percent fs-3"></i>
                    </Col>
                    <Col className="col-8">
                        <p className="m-0 rem08">Humidity</p>
                        <p className="m-0">{resultsWeather.main.humidity} %</p>
                    </Col> 
            </Col>
                                    
        </Col> 
        </>
    )
}

export default WeatherMain

