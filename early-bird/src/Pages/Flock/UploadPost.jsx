import React, {useState} from "react";
import Modal from "react-modal";
import './flock.css';

const modalStyle = {
    content:{
    position: 'fixed',
    width: '1030px',
    height: '700px',
    background: '#FFFFFF',
    borderRadius: '30px',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    border: '1px solid rgba(0, 0, 0, 0.747)',
    }
}



function UploadPost(props) {
    const {isOpen, setIsOpen} = props;
    
    const handleCloseModal = () => {
        setIsOpen(!isOpen);
    };

    const handleSubmit = () => {
        handleCloseModal();
    }

    return (

        <Modal
            isOpen={isOpen}
            onRequestClose={handleCloseModal}
            style={modalStyle}
        >
            <div>
            <p className="text">Create your own flock</p>
            <hr></hr>
            </div>



      </Modal>

    );

}

export default UploadPost;