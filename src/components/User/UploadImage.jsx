import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadImage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const accessToken = localStorage.getItem('token');

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      setPreviewImage(URL.createObjectURL(selectedImage));
    }
  };

  const updateImage = async () => {
    if (!image) {
      alert('Please select an image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await fetch('https://api.bash.com.ng/api/profile/upload-image', {
        method: 'POST',
        headers,
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error updating user picture: ${errorText}`);
      }

      const updatedData = await response.json();
      console.log('User updated successfully!', updatedData);
      alert('User profile picture has been updated successfully!');
      navigate('/user/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to upload image: ' + error.message);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 my-10 rounded-lg shadow-lg">
      <h2 className="text-2xl text-blue-700 font-bold mb-4">Upload Image</h2>
      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-400 p-2 w-full"
        />
      </div>
      {previewImage && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Preview:</h3>
          <img src={previewImage} alt="Uploaded" className="max-w-full h-auto" />
        </div>
      )}
      <button
        onClick={updateImage}
        disabled={!image}
        className={`w-full py-2 px-4 mt-4 ${
          image ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
        } text-white font-bold rounded`}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadImage;
