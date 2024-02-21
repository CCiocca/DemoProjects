import { Container } from "react-bootstrap"
import SearchBar from "../molecules/SearchBar"
import ResultsPlaces from "../molecules/ResultsPlaces"


export const ChooseCity = () => {
    return(
        <Container>
            <SearchBar/>
            <ResultsPlaces/>
        </Container>
    )
}

export default ChooseCity