import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
    const navigate = useNavigate();
    const [first_Name, setFirst_Name] = useState("");
    const [last_Name, setLast_Name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm_Password, setConfirm_Password] = useState("");

    const clearForm = () => {
        setFirst_Name("");
        setLast_Name("");
        setEmail("");
        setPassword("");
        setConfirm_Password("");
    };

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (!first_Name || !last_Name || !email || !password || !confirm_Password) {
                alert('Please fill in all the information');
                return;
            }

            if (password !== confirm_Password) {
                alert('Passwords do not match');
                return;
            }

            const userData = {
                first_name: first_Name,
                last_name: last_Name,
                email: email,
                password: password,
                password_confirmation: confirm_Password
            };

            const apiUrl = 'https://api.bash.com.ng/api/register';
  
      try {
        const response = await axios.post(apiUrl, userData);
  
        if (response.status === 201) {
          alert("Successfully Create Account. Login Please");
          navigate("/login")
          clearForm();
        } else if (response.status === 200) {
          alert("Please Provide Valid Email")
          clearForm();
        }
  
        // You may want to do something with the response data
      } catch (error) {
        console.error('Error creating user:', error);
        alert("Email Already registered.");
        clearForm();
        throw error;
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

    return (
        <div className="container">
            <form onSubmit={handleSignUp} className="max-w-md mx-auto bg-gradient-to-r from-blue-500 to-white p-8 shadow-md rounded-md mt-8">
                <h1 className='font-bold font-MyFont text-xl text-center mb-4'>Create Account</h1>
                <div className="mb-4 flex items-center">
                    <FaRegUser className="mr-2" />
                    <label className="block text-gray-700 text-sm font-bold w-full" htmlFor="first_name">First Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="first_name"
                        id="first_name"
                        value={first_Name}
                        onChange={(e) => setFirst_Name(e.target.value)}
                        placeholder="John"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <FaRegUser className="mr-2" />
                    <label className="block text-gray-700 text-sm font-bold w-full" htmlFor="last_name">Last Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="last_name"
                        id="last_name"
                        value={last_Name}
                        onChange={(e) => setLast_Name(e.target.value)}
                        placeholder="Doe"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <MdEmail className="mr-2" />
                    <label className="block text-gray-700 text-sm font-bold w-full" htmlFor="email">Email:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="example@email.com"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <RiLockPasswordFill className="mr-2" />
                    <label className="block text-gray-700 text-sm font-bold w-full" htmlFor="password">Password:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="********"
                    />
                </div>
                <div className="mb-4 flex items-center">
                    <RiLockPasswordFill className="mr-2" />
                    <label className="block text-gray-700 text-sm font-bold w-full" htmlFor="password_confirmation">Password Confirmation:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        name="password_confirmation"
                        id="password_confirmation"
                        value={confirm_Password}
                        onChange={(e) => setConfirm_Password(e.target.value)}
                        placeholder="********"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                >
                    Sign Up
                </button>
            </form>
        </div>
    );
}

export default Signup;