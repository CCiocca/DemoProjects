import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "../molecules/Job";
import { useNavigate, useParams } from "react-router-dom";


const CompanySearchResults = () => {

  const [jobs, setJobs] = useState([]);
  const params = useParams();
  const navigate = useNavigate()

  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  useEffect(() => {
    getJobs();
  }, []);

  const getJobs = async () => {
    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Row className="mx-0 mt-3 p-3">
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-5 pg-title">Job posting for: {params.company}</h1>
        </Col>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-end">
          <Button className="me-2" variant="outline-primary" onClick={()=> navigate('/favourites')}>See favourites</Button>
          <Button variant="outline-primary" onClick={()=> navigate('/')}>Home</Button>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map(jobData => (
            <Job key={jobData._id} jobData={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
