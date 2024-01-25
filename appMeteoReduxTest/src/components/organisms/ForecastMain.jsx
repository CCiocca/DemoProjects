import { Col, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import ForecastChart from "./ForecastChart"


const ForecastMain = () => {

    const resultsForecast = useSelector((state)=>state.forecast) //this gets resultsForecast from the redux store
    console.log(resultsForecast, 'io sono i forecasts da for main')
    
    return(
    <>
    <h5 className="mt-3">Forecasts</h5>

    {resultsForecast.list && resultsForecast.list.length > 0 && //this verifies that list exists and is not empty
    <>
    <Row className="d-flex flex-column flex-md-row m-0 p-0">
    <Col className="p-0 col-12 col-md-8"> 
        <ForecastChart/>
    </Col>   
    <Col className="col-12 col-md-4 d-flex justify-content-center p-0 gap-1 flex-row flex-wrap overflow-hidden">
        
        
        <div className="scrollbar">
    
        {resultsForecast.list.map((forecastByHour) => { ////this allows to process the timestamps given by API into readable date and time format
            
            const date = new Date(forecastByHour.dt*1000);
            const day = date.getDate().toString().padStart(2, '0');
            const month = date.getMonth().toString() +1; 
            const hour = date.getHours().toString().padStart(2, '0')
            const minutes = date.getMinutes().toString().padStart(2, '0');

            return(

            <Col key={forecastByHour.dt} className="rounded cardsForecast d-flex align-items-center p-2 my-1 col-12">

                <Col className="col-3 opacity1" >
                    <p className="m-0 p-0 rem08">{day}/{month}<br/>{hour}:{minutes}</p>
                </Col>
                <Col className="col-6 opacity1" >
                    <img src={`https://openweathermap.org/img/wn/${forecastByHour.weather[0].icon}@2x.png`} alt={forecastByHour.weather[0].description} className="weatherIcon"/>
                    <p className="m-0 rem08">{forecastByHour.weather[0].description}</p>
                </Col> 
                <Col className="col-3 opacity1 d-flex justify-content-center align-items-center">
                    <p className="rem2 m-0 d-inline">{forecastByHour.main.temp.toFixed()}</p><p className="rem08 m-0 d-inline">°C</p>
                </Col> 
            </Col>
            
        )}
            )}   
        </div>
    </Col>
    </Row>     
    </>
    }
    </>
    )
}

export default ForecastMain