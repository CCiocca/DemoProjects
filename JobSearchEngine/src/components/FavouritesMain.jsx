
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { REMOVE_FAVOURITE } from "../actions/favouritesAction";
import { useState } from "react";
import { ConfirmDeleteAlert } from "./ConfirmDeleteAlert"

const FavouritesMain = () => {
    const favouritesData = useSelector((state) => state.favourites);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [companyToRemove, setCompanyToRemove] = useState('');



    const handleClick = (favourite) => {
        setCompanyToRemove(favourite) //adding this function is essential so that the modal company name gets updated correctly, otherwise the modal shows the last element of the fav list in the modal, and removes that one 
        setShowDeleteModal(true); //modal appears
    }

    const handleCloseModal = () => {
        setShowDeleteModal(false) //modal gets closed
        setCompanyToRemove('') // to avoid random damages, let's reset the const to an empty string when modal gets closed by the user
      }

    const handleConfirmDelete = (companyToRemove) => {
        dispatch({type: REMOVE_FAVOURITE, payload: companyToRemove}); //this allows to remove the desired company from the store
        setShowDeleteModal(false); //modal gets closed
    }
    

    return(
        <Container>
            <Row
            className="mx-0 mt-3 p-3 d-flex flex-column"
            style={{ border: '1px solid #00000033', borderRadius: 4 }}
            >
                <Col xs={10} className="mx-auto my-3">
                <h1 className="display-4">Favourite Companies</h1>
                <Button variant="outline-primary" onClick={()=> navigate('/')}>Home</Button>
                </Col>
                <Col xs={10} className="mx-auto mb-5 mt-3">
                <ListGroup>
                    { favouritesData?.length > 0 ? (
                        favouritesData.map((favourite, index) => 
                             
                        <ListGroup.Item key={index} className="d-flex justify-content-between">
                            <Link to={`/${favourite.company_name}`}>{favourite.company_name}</Link>
                            <Button variant="outline-danger" onClick={()=> handleClick(favourite)}>Remove</Button>
                            <ConfirmDeleteAlert 
                                show={showDeleteModal}
                                handleCloseModal={handleCloseModal}
                                handleConfirmDelete={() => handleConfirmDelete(companyToRemove)}
                                companyName={companyToRemove.company_name}/>
                        </ListGroup.Item>
                    )) : (
                    <ListGroup.Item>There are no favourites</ListGroup.Item>
                    ) 
                    }
                </ListGroup>
            </Col>

    </Row>
    </Container>
    )
}

export default FavouritesMain


// // if the state already contains the company, return an alert
// if (state.favourites.some(existingCompany => existingCompany._id === company._id)) {
//     alert("This company is already present in favourites");
//     return {
//         type: null, // if the company is present, dont do anything
//     };
// } else {

{/*          <>
         <Col xs={3}>
         <Link to={`/${favourite.company_name}`}>{favourite.company_name}</Link>
         </Col>
         <Col xs={7}>
         <a href={favourite.url} target="_blank" rel="noreferrer">
            {favourite.title}
         </a>
         </Col>
         <Col xs={2}>
         <a onClick={() => dispatch(setFavourites(favourite.company_name))}>Add to favourites</a>
         {/* <i className="bi bi-heart dark"></i> 
         </Col>
         </>
 })} */}