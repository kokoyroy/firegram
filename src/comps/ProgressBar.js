import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'
import { motion } from 'framer-motion';

function ProgressBar({ file, setfile }) {
    const { progress, url } = useStorage(file)
    console.log(progress, url);


    useEffect(() => {
        if (url) {
            setfile(null)
        }
    }, [url, setfile])



    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: progress + '%' }}
            className='progress-bar' >
            {progress.toFixed(1)}
        </motion.div>
    )
}

export default ProgressBar
