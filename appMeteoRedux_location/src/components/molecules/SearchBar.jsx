// this component gets the city name from the user and updates the coordinates state with all the city with that name and infos on them 
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { ErrorMessageQuery } from "../molecules/ErrorMessageQuery";
import { Link, useNavigate } from "react-router-dom";
import { setResultsCoordinates } from "../../redux/coordinatesSlice";


const SearchBar = () => {
    const [query, setQuery] = useState('') //useState allows to set a state and update it locally in the component
    const [showModal, setShowModal] = useState(false);    //this modal pops up when the query is not a valid search parameter for the API
    
    const dispatch = useDispatch(); //this allows to store new data in the redux store
    const navigate = useNavigate() //to navigate from the component to a /example  page

    const APIkey = '36c6ba5e6cbbd2a3c701bf362b4629b9'

    const urlCity = `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=40&appid=${APIkey}` //api to get latitude and longitude from the city name


    //When the user writes in the input, the query value gets updated
    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    //onClick, this function fetches the data based on city query 
    const fetchData = async () => {
        if (query === ''){      //with this condition i check that the user didn't enter an empty query, so it doesn't navigate to /direct/
            setShowModal(true)
        }
        else{
            fetchCoordinates()
            setQuery('')//to empty the search field when the search is done
            navigate(`/geo/1.0/direct/${query}`)  //navigates to choosecity element
        }}

    
    const fetchCoordinates = async () => {
        try {
            const res = await fetch(urlCity);
            if (res.ok) {
                const data = await res.json();

                if(data.length == 0) {      //if the city is unexisting, hence the returned array is empty, an error modal appears, otherwise the data are dispatched. I put the modal before the dispatch to save an action that would be useless 
                    setShowModal(true);     //this 
                } else {
                dispatch(setResultsCoordinates(data))    //the fetched data are dispatched and saved in the store     
            }
        }}
        catch (err) {
            console.log(err)    // if the API fetch fails, an error is returned in console
        }
    };


    //this allows to dismiss the modal. It also closes when the user clics outside the modal
    const handleCloseModal = () => {
        setShowModal(false)
      }


    return(
        <>
            <Row className="d-flex flex-column flex-md-row justify-content-between"> 
                <Col className=" mb-1">
                    <Link to="/" className="text-white text-decoration-none">
                    <h1 className="fs-2">MoodieWeather</h1>
                    </Link>
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

        </>
    )
}

export default SearchBar