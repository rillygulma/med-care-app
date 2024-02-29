import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Address = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    state: '',
    city: '',
    zip: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem('token');
    if (!accessToken) {
      alert('User not found. Please log in.');
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };

    try {
      const response = await fetch('https://api.bash.com.ng/api/address', {
        method: 'POST',
        headers,
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error updating user address: ${errorText}`);
      }

      const updatedData = await response.json();
      console.log('User Address updated successfully!', updatedData);
      alert('User Address updated successfully!');
      navigate('/user/dashboard');
    } catch (error) {
      console.error(error);
      alert('Failed to update address: ' + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 className="font-bold font-MyFont text-xl text-blue-600 text-center mb-4">Update Address</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">NAME:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter name"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">EMAIL:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">PHONE NO:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 font-bold mb-2">COUNTRY:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
          placeholder="Enter country"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="state" className="block text-gray-700 font-bold mb-2">STATE:</label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          placeholder="Enter state"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 font-bold mb-2">LOCAL GOVERNMENT:</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter Local Government"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="zip" className="block text-gray-700 font-bold mb-2">ZIP:</label>
        <input
          type="text"
          id="zip"
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Enter Zip Code"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 font-bold mb-2">ADDRESS:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter Home Address"
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
      </div>
        
      <button type="submit" className="bg-indigo-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Submit</button>
    </form>
  );
};

export default Address;
