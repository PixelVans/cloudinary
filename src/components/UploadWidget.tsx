import { useEffect, useRef, useState, } from 'react';
import React from 'react';
// Extend the global Window interface to include cloudinary
declare global {
  interface Window {
    cloudinary: any;
  }
}

const UploadWidget = () => {
  const widgetRef = useRef<any>(null);
  const cloudinaryRef = useRef<any>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null); // To store the uploaded image URL
  
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: 'dzmogt63z', // Replace with your Cloudinary cloud name
        uploadPreset: 'upload', // Replace with your upload preset name
      },
      function (error: any, result: any) {
        if (result.event === 'success') {
          // Get the uploaded image URL
          const uploadedImageUrl = result.info.secure_url;
          setImageUrl(uploadedImageUrl); // Set the image URL in state
         
        }
        if (error) {
          console.error('Upload error:', error);
        }
      }
    );
  }, []);

  return (
    <div>
      <div className='text-center '>
       <button
        className='p-2 bg-green-600 rounded-lg w-[200px] text-white font-semibold px-3 mt-5 hover:opacity-80'
        onClick={() => widgetRef.current.open()}>
        Select Image
      </button> 
      </div>
      
      {imageUrl && (
        <div className=' p-5 ml-2 '>
          <p className='text-white font-semibold p-5 text-lg '>Uploaded Images:</p>
          <img src={imageUrl} alt="Uploaded" style={{ width: '200px' }} />
        </div>
      )}
    </div>
  );
};

export default UploadWidget;
