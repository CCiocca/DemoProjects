import { Row, Col, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addFavourite } from '../actions/favouritesAction'
import { useState } from 'react'
import{ AddedAlert } from './AddedAlert.jsx'
import { FavHeart } from './FavHeart.jsx'



const Job = ({ jobData }) => {

  const favouritesData = useSelector((state) => state.favourites);
  const dispatch = useDispatch()

  const [showModal, setShowModal] = useState(false);

  
  const handleClick = (jobData) => {

      // I check that the company is not already among the favs
    const isCompanyInFavourites = favouritesData.some((favourite) => favourite.company_name === jobData.company_name )
  
     // If the company is not yet in the favourites, it is added, else it is not. I left the modal tue so that the user knows that the company is in its favourites anyways
    if(!isCompanyInFavourites) {
      dispatch(addFavourite(jobData));
      }
    setShowModal(true);
  }

    //this allows to dismiss the modal. It also closes when the user clics outside the modal
  const handleCloseModal = () => {
    setShowModal(false)
  }

    //if the company is already among the favourites, the heart on its side will be full. Else, it will be empty
  

  // This if verifies that jobData is defined
  if (!jobData) {
    return "no job ad"; 
  } 

  return (
    <>
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={1}>
      <FavHeart jobId={jobData._id} companyName={jobData.company_name}/>
    </Col>
    <Col xs={3}>
      <Link to={`/${jobData.company_name}`}>{jobData.company_name}</Link>
    </Col>
    <Col xs={5}>
      <a href={jobData.url} target="_blank" rel="noreferrer">
        {jobData.title}
      </a>
    </Col>
    <Col xs={3}>
      <Button variant="outline-success"  onClick={() => handleClick(jobData)}>Add to favourites
      </Button>
    </Col>

    {/* this modal is used to confirm that company was added */}
    <AddedAlert 
      show={showModal}
      handleCloseModal={handleCloseModal}
      companyName={jobData.company_name}/>
  </Row>

  </>
)
}

export default Job
