import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import useStorage from '../hooks/useStorage';

const ProgressBar = ({ file, setFile }: any) => {
  const { url, progress } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [setFile, url])

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
}

export default ProgressBar;