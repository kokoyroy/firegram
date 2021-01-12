import React from 'react'
import usefirestore from '../hooks/useFirestore'

function ImageGrid() {
    const { docs } = usefirestore('images')
    console.log(docs);

    return (
        <div className='img-grid'>
            {docs && docs.map((doc) => {
                return <div className='img-wrap' key={doc.id}>
                    <img src={doc.url} alt={doc.name} />
                </div>
            })}
        </div>
    )
}

export default ImageGrid
