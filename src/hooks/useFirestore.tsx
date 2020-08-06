import { useState, useEffect } from 'react';
import { firestore } from '../config/firebase';

function useFirestore(collection: string) {
  const [docs, setDocs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const unsubscribe = firestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        let documents: any = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id })
        });
        setDocs(documents);
        setLoading(false);
      }, (err) => {
        setLoading(false);
        setError(err.message);
        console.error(err.message);
      });

    return () => unsubscribe();

  }, [collection]);

  return { docs, loading, error }
}

export default useFirestore;