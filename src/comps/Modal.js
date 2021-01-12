import React from 'react'
import { motion } from 'framer-motion';

function Modal({ selectedImage, setSelectedImage }) {
    function clickHandler(e) {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImage(null);
        }
    }


    return (
        <motion.div
            className='backdrop'
            onClick={clickHandler}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}

        >
            <motion.img
                src={selectedImage} alt="enlarged"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                transition={{ delay: 1 }}
            />
        </motion.div>
    )
}

export default Modal
