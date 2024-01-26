
import { Modal, Button } from 'react-bootstrap';


//this modal asks confirmaiton that you want to remove the company from  your favs; it gets props from the parent (mainsearch component)
export const ConfirmDeleteAlert = ({ show, handleCloseModal, handleConfirmDelete, companyName }) => {
  return (
    <Modal show={show} onHide={() => handleCloseModal()}> 
    {/* I have to add these callbacks , otherwise 2 overlapped alerts appear in the same moment */}
      <Modal.Header closeButton>
        <Modal.Title>Warning</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to remove "{companyName}" from your favourites?
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=> handleCloseModal()}>
            Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}



