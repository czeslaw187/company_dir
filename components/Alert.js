import {Modal, ModalHeader, ModalBody} from 'reactstrap'

function Alert({message, alertOpen, toggleAlert}) {
    console.log(alertOpen,'alertopen')
    const closeBtn = (
        <button type="button" className="close" onClick={toggleAlert}>&times;</button>
    )
    return ( 
        <Modal isOpen={alertOpen} toggle={toggleAlert} backdrop={true}>
            <ModalHeader toggle={toggleAlert} close={closeBtn}></ModalHeader>
            <ModalBody>
                <h1 className="text-2xl">{message}</h1>
            </ModalBody>
        </Modal>
     );
}

export default Alert;