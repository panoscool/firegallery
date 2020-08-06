import React from 'react';
import { motion } from 'framer-motion';
import useFirestore from '../hooks/useFirestore';
import Spinner from './Spinner';

function ImageGrid({ setSelectedImg }: any) {
  const { docs, loading, error } = useFirestore('images');

  return (
    <div>
      {loading && <Spinner />}
      {error && <div className="output error">{error}</div>}
      <div className="img-grid">
        {docs?.map((doc: any) => (
          <motion.div className="img-wrap" key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img src={doc.url} alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ImageGrid;