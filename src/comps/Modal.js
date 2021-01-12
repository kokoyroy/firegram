import React from 'react'

function Modal({ selectedImage, setSelectedImage }) {
    function clickHandler(e){
        if(e.target.classList.contains  ('backdrop')){
            setSelectedImage(null);
        }
    }


    return (
        <div className='backdrop' onClick={clickHandler} >
            <img src={selectedImage} alt="enlarged" />
        </div>
    )
}

export default Modal
