import { Row, Col, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from "react"



const ResultsPlaces = ({place}) => {


    // const [results, setResults] = useState([])

    // const [latitude, setLatitude] = useState('')
    // const [longitude, setLongitude] = useState('')


    // const handleClick = (e) => {
    //     setLatitude(place.lat);
    //     setLongitude(place.lon);
    //     // console.log(e.target.value)
    //     // console.log("values" , value1, value2);
    //     console.log(latitude, "io sono la lat");
    //     // fetchData()
    //     // navigate('/data/2.5/weather')
    // }

    const handleClick = () => {

    }

   
   

    return(
        <>
        <Button onClick={() => handleClick()} className='m-3 container-fluid'>
        <Row
            className="mx-auto mt-3 p-0"            
        >
                    <Col> <p>{place.list[0].main.temp}</p></Col>
                    <Col> <p>{place.state}</p></Col>
                    <Col> <p>{place.country}</p></Col>
        </Row>
        </Button>
        </>
    )
}

export default ResultsPlaces






