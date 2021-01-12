import React, { useEffect } from 'react'
import useStorage from '../hooks/useStorage'

function ProgressBar({ file, setfile }) {
    const { progress, url } = useStorage(file)
    console.log(progress, url);


    useEffect(() => {
        if (url) {
            setfile(null)
        }
    }, [url,setfile])



    return (
        <div className='progress-bar' style={{ width: progress + '%' }} >
            {progress.toFixed(1)}
        </div>
    )
}

export default ProgressBar
