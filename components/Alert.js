import {Modal, ModalHeader, ModalBody, ModalFooter, Button} from 'reactstrap'
import {useState} from 'react'

function Alert({message, toggle, isOpen}) {
    const closeBtn = (
        <button type="button" className="close" onClick={toggle}>&times;</button>
    )
    return ( 
        <Modal isOpen={isOpen} toggle={toggle} backdrop={true}>
            <ModalHeader toggle={toggle} close={closeBtn}></ModalHeader>
            <ModalBody>
                <h1 className="text-2xl">{message}</h1>
            </ModalBody>
            <ModalFooter>
                <Button color="info" type="close" onClick={toggle}>OK</Button>
            </ModalFooter>
        </Modal>
     );
}

export default Alert;