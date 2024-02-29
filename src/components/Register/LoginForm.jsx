import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      const response = await fetch("https://api.bash.com.ng/api/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error("Login failed: " + error);
      }

      const data = await response.json();
      handleSuccessfulLogin(data.data);
    } catch (error) {
      alert(error.message);
    }
  }

  const handleSuccessfulLogin = (data) => {
    console.log(data);
    alert("Login successful!", data.user.first_name);
    
    localStorage.setItem("userFirstName", data.user.first_name);
    localStorage.setItem("token", `${data.token}`);

      
    navigate("/user/dashboard");
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form onSubmit={handleLogin} className="max-w-md mx-auto mt-10 bg-gradient-to-r from-blue-500 to-white p-4 md:p-6 rounded-md shadow-md">
      <h1 className="font-MyFont font-bold text-center text-lg md:text-xl mb-4">Login</h1>
      <div className="mb-4 flex items-center"> 
        <label htmlFor="email" className="block font-MyFont font-bold text-sm md:text-base dark:text-black mb-2 flex items-center w-24">
          <MdEmail className="mr-2" />Your email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:bg-white dark:border-white dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="name@email.com"
          required
        />
      </div>
      <div className="mb-4 flex items-center">     
        <label htmlFor="password" className="block font-MyFont font-bold text-sm md:text-base text-gray-900 dark:text-black mb-2 flex items-center w-24">
          <RiLockPasswordFill className="mr-2" />Your password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          className="w-full px-3 py-2 placeholder-gray-400 text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:text-black dark:bg-white dark:border-gray-600 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full px-4 py-2 text-sm md:text-base text-center font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Login
      </button>
    </form>  
  );
}

export default LoginForm;
