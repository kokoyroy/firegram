import React from 'react'
import usefirestore from '../hooks/useFirestore'
import { motion } from 'framer-motion';

function ImageGrid({ setSelectedImage }) {
    const { docs } = usefirestore('images')
    console.log(docs);

    return (
        <motion.div className='img-grid'>
            {docs && docs.map((doc) => (
                <motion.div
                    whileHover={{ opacity: 1 }}
                    layout
                    onClick={() => setSelectedImage(doc.url)}
                    className='img-wrap' key={doc.id}
                >
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        src={doc.url} alt={doc.name} />
                </motion.div>
            ))}
        </motion.div>
    )
}

export default ImageGrid
