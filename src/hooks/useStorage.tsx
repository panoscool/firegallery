import { useState, useEffect } from 'react';
import { storage, firestore, timestamp } from '../config/firebase';

function useStorage(file: File) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const imageName = `${Date.now()}-${file.name}`
    const storageRef = storage.ref(imageName);
    const collectionRef = firestore.collection('images');

    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      setProgress(percentage);
    }, (err) => {
      setError(err.message);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      collectionRef.add({ url, createdAt })
      setUrl(url);
    })
  }, [file]);

  return { progress, url, error };
}

export default useStorage;