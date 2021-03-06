import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

function useStorage(file) {
    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)
    // console.log(file.name);
    useEffect(() => {
        //references 
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images')

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            let time = await timestamp()
            setUrl(url);
            collectionRef.add({ url: url, createdAt: time, name: file.name })
        })
    }, [file]);

    return { progress, error, url }

}

export default useStorage;
