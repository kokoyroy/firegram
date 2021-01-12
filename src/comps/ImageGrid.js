import React from 'react'
import usefirestore from '../hooks/useFirestore'

function ImageGrid({ setSelectedImage }) {
    const { docs } = usefirestore('images')
    console.log(docs);

    return (
        <div className='img-grid'>
            {docs && docs.map((doc) => (
                <div
                    onClick={() => setSelectedImage(doc.url)}
                    className='img-wrap' key={doc.id}
                >
                    <img src={doc.url} alt={doc.name} />
                </div>
            ))}
        </div>
    )
}

export default ImageGrid
