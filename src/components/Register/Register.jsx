import { useState } from 'react';
import Signup from './Signup';
import LoginForm from './LoginForm';

const Register = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
  
    const handleLoginClicked = () => {
        setShowLogin(true);
        setShowRegister(false); // Ensure only login is shown
    };

    const handleRegisterClicked = () => {
        setShowRegister(true);
        setShowLogin(false); // Ensure only register is shown
    };
  
    return (
    <div className="flex flex-col bg-white items-center justify-center">
    <div className='"flex flex-col space-x-10 bg-blue-700  shadow-lg p-6 rounded-lg'>
    <button 
        onClick={handleLoginClicked} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
        Login
    </button>
    <button 
        onClick={handleRegisterClicked} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
    >
        Register
    </button>
    </div>
    {showLogin && <LoginForm />}
    {showRegister && <Signup />}
    
</div>
    );
};

export default Register;