import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addJobsList } from "../actions/favouritesAction";


const MainSearch = () => {
  const [query, setQuery] = useState("");

  const jobsList = useSelector((state) => state.jobsList) //array from the store which contain the companies of the last search the user made
  
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch(addJobsList(data))
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto my-3">
          <Button variant="outline-primary" onClick={()=> navigate('/favourites')}>See favourites</Button>
        </Col>
        
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobsList.map(jobData => (
            <Job key={jobData._id} jobData={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
