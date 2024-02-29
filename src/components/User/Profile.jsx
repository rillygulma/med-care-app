import { useState } from 'react';
import { FaUser, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    date_of_birth: "",
  });

  const accessToken = localStorage.getItem("token");
  
  const updateUser = async () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${accessToken}`,
    };

    try {
      const response = await fetch("https://api.bash.com.ng/api/profile/update", {
        method: "PUT",
        headers,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error("Error updating user: " + error);
      }

      const updatedData = await response.json();
      console.log("User updated successfully!", updatedData);
      alert("User profile updated successfully!")
      navigate("/user/dashboard");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <h1 className='font-bold font-MyFont text-xl text-blue-600 text-center mb-4'>Update Profile</h1>
    <label htmlFor="first_name" className="block text-gray-700 text-sm font-bold mb-2">
      <FaUser className="inline-block mr-2" />First Name:
    </label>
    <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your first name" />
  </div>
  <div className="mb-4">
    <label htmlFor="last_name" className="block text-gray-700 text-sm font-bold mb-2">
      <FaUser className="inline-block mr-2" />Last Name:
    </label>
    <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your last name" />
  </div>
  <div className="mb-4">
    <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
    <select id="gender" name="gender" value={formData.gender} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
  </div>
  <div className="mb-4">
    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
      <FaEnvelope className="inline-block mr-2" />Email:
    </label>
    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email address" />
  </div>
  <div className="mb-4">
    <label htmlFor="date_of_birth" className="block text-gray-700 text-sm font-bold mb-2">
      <FaCalendarAlt className="inline-block mr-2" />Date of Birth:
    </label>
    <input type="text" id="date_of_birth" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="yyyy/mm/dd" />
  </div>
  <div className="flex items-center justify-between">
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
  </div>
</form>
  );
};
export default Profile;
