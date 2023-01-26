import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'

function Warning({warningText, isOpen, toggle, handleDelete, locId}) {
    const closeBtn = (
        <button type="button" className="close" onClick={toggle}>&times;</button>
    )
    return ( 
        <Modal isOpen={isOpen} toggle={toggle} backdrop={true}>
                <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
                <ModalBody>
                    <h1 className="text-2xl">{warningText}</h1>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={()=>{handleDelete(locId)}}>Yes</Button>
                    <Button color="white" type="close" onClick={toggle}>No</Button>
                </ModalFooter>
            </Modal>
     );
}

export default Warning;