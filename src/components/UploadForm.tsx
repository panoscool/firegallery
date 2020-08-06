import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function UploadForm() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');

  function handleChange(e: any) {
    let selected = e.target.files[0];
    const types = ['image/png', 'image/jpeg']
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)')
    }
  }

  return (
    <form>
      <label>
        <input type="file" onChange={handleChange} />
        <span>+</span>
      </label>
      {error && <div className="output error">{error}</div>}
      {file && <ProgressBar file={file} setFile={setFile} />}
    </form>
  )
}

export default UploadForm;