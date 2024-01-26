import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


//this modal gives confirmaiton that you have added the company in your favs; it gets props from the parent (mainsearch component)
export const AddedAlert = ({ show, handleCloseModal, companyName }) => {

  const navigate = useNavigate() 
  
  return (
    <Modal show={show} onHide={handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>Added to Favourites</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Company "{companyName}" has been added to your favourites.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" onClick={()=> navigate('/favourites')}>See favourites</Button>
      </Modal.Footer>
    </Modal>
  );
}



