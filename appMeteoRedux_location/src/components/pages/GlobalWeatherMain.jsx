import { Container, Row } from "react-bootstrap";
import SearchBar from "../molecules/SearchBar";
import WeatherMain from "../organisms/WeatherMain";
import { useSelector } from "react-redux";
import ForecastMain from "../organisms/ForecastMain";

const GlobalWeatherMain = () => {
    const resultsWeather = useSelector((state)=>state.weather) // this gets the resultsWeather from the redux store

    return(
        <>
        <Container>
            <SearchBar/>
            {resultsWeather.name !== "" &&          //this checks that the name exists, aka that data on an existing city are present
            <>
            <Row className="mx-auto mt-3 p-0">
                <WeatherMain/>
                <ForecastMain />                   
            </Row>
            </>
            }

        </Container>
        </>
    )
}

export default GlobalWeatherMain