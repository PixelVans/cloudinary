import React, { useState, ChangeEvent } from 'react';
import { uploadImageToCloudinary } from '../cloudinary';

const ImageUploader: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setImage(files[0]);
    }
  };

  const handleUpload = async (): Promise<void> => {
    if (image) {
      const url = await uploadImageToCloudinary(image);
      if (url) {
        setImageUrl(url); // Set the Cloudinary URL
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && (
        <div>
          <h3>Image URL:</h3>
          <a href={imageUrl} target="_blank" rel="noopener noreferrer">
            {imageUrl}
          </a>
          <img src={imageUrl} alt="Uploaded" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
