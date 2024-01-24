import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


//this modal appears to tell the user that the query is not valid
export const ErrorMessageQuery = ({ show, handleCloseModal }) => {
  
  return (
    <Modal show={show} onHide={handleCloseModal}  className='rem08'>
      <Modal.Header closeButton className='blueBackground' closeVariant='white'>
        <Modal.Title>City not found</Modal.Title>
      </Modal.Header>
      <Modal.Body className='blueBackground'>
        Please insert a valid city
      </Modal.Body>
    </Modal>
  );
}

