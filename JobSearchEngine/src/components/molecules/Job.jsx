import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FavHeartClick from './FavHeartClick.jsx'



const Job = ({ jobData }) => {

  // This if verifies that jobData is defined
  if (!jobData) {
    return "No job ad available"; 
  } 

  return (
    <>
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={2}>
      <FavHeartClick jobId={jobData._id} companyName={jobData.company_name} jobData={jobData}/>
    </Col>
    <Col xs={4}>
      <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
    </Col>
    <Col xs={4}>
      <a href={jobData.url} target="_blank" rel="noreferrer">
        {jobData.title}
      </a>
    </Col>
  </Row>

  </>
)
}

export default Job
