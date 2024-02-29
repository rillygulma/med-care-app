import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const DashboardView = () => {
  const [userName, setUserName] = useState("");

    useEffect(() => {
        // Fetch or set the user's name when they log in
        // For demonstration purposes, I'm assuming it's stored in localStorage
        const userFirstName = localStorage.getItem("userFirstName");
        if (userFirstName) {
            setUserName(userFirstName);
        }
    }, []);

  return (
    <div className="flex items-center justify-between shadow-lg px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4">
    <h1 className="text-lg md:text-xl lg:text-2xl font-bold ">WELCOME BACK <span className="uppercase">{userName}</span></h1>
    <div className="flex items-center rounded-md">
        <input type="text" className="bg-gray-100 h-10 md:h-12 lg:h-14 px-3 md:px-4 lg:px-5 w-40 md:w-52 lg:w-64 rounded-md placeholder-gray-500 text-sm md:text-base lg:text-lg leading-none" placeholder='Search for....' />
        <div className="bg-blue-600 h-10 md:h-12 lg:h-14 px-3 md:px-4 lg:px-5 flex items-center justify-center cursor-pointer rounded-md">
            <FaSearch className="text-white" />
        </div>
    </div>
</div>
  )
}

export default DashboardView;