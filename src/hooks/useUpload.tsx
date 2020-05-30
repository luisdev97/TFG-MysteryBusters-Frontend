import { useState, useEffect } from 'react';

function useUpload() {
  const [uploadedImage, setUploadedImage] = useState<string>('');
  const url = `https://api.cloudinary.com/v1_1/luisdev97/image/upload`;


  const uploadImage = async(files: any) => {
    const formData = new FormData();
    formData.append("file", files['0']);
    formData.append("upload_preset", "mystery-busters");
    const res = await fetch(url, {
      method: "POST",
      body: formData
    });
    const savedFile = await res.json();
    const urlCloudinary: string = await savedFile.secure_url;
    setUploadedImage(urlCloudinary);
    return urlCloudinary;
  }
  

  return { uploadedImage, uploadImage };
}

export default useUpload;
