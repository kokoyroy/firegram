import React, { useState } from 'react'
import ProgressBar from './ProgressBar'

function UploadForm() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    //accepted filetypes array
    const types = ['image/jpeg', 'image/png', 'image/jpg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        console.log(selected);
        if (selected && types.includes(selected.type) && selected.size < 3000000) {
            setFile(selected)
            setError(null)
        } else {
            setFile(null);
            setError('please select an image file (jpeg or png) less than 3mb')
        }

    }

    return (
        <>
            <form action="">
                <label >
                    <input type="file" onChange={changeHandler} id="file" />
                    <span>+</span>
                </label>
                <div className="output">
                    {error && <div className='error' >{error}</div>}
                    {file && <div className='file' >{file.name}</div>}
                    {file && <ProgressBar file={file} setfile={setFile} />}
                </div>
            </form>
        </>
    )
}

export default UploadForm




