import React, { useState } from "react";

function useUpload() {
  const [uploadedImage, setuploadedImage] = useState<string | null>(null);
  const url = `https://api.cloudinary.com/v1_1/luisdev97/image/upload`;
  async function uploadImage(files: any): Promise<string | null> {
    const formData = new FormData();
    formData.append("file", files['0']);
    formData.append("upload_preset", "mystery-busters");

    const res = await fetch(url, {
      method: "POST",
      body: formData
    });

    const uploadedFile = await res.json();
    setuploadedImage(uploadedFile.secure_url);
    console.log(uploadedImage);
    return uploadedImage;
  }

  return { uploadImage, uploadedImage };
}

export default useUpload;
