import { FaChevronRight,  FaTachometerAlt } from "react-icons/fa"
import { BiLogOut } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiListOrdered } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";

const UserSidebar = () => {

    const navigate = useNavigate();
     
    const handleLogOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userName'); 
        navigate("/");
        window.location.reload();
    };

  return (
    <div className="bg-blue-700 min-h-screen px-4 sm:px-8">
    <div className="px-2 sm:px-4 py-6 flex items-center justify-center border-b-2 border-gray-300">
        <h1 className="text-white text-lg font-extrabold cursor-pointer">USER</h1>
    </div>
    <div className="flex items-center gap-2 sm:gap-4 py-4 border-b-2 border-gray-300">
        <FaTachometerAlt color="white"/>
        <p className="text-sm sm:text-base font-bold text-white">DASHBOARD</p> 
    </div>

    <div className="pt-4 border-b-2 border-gray-300">
        <p className="text-xs sm:text-sm font-extrabold text-white opacity-50">User Dashboard</p>
        <div className="flex items-center justify-between gap-2 sm:gap-4 py-4 hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out cursor-pointer">
            <div className="flex items-center gap-2 sm:gap-4">
                <FaHome  color="white"/>
                <a className="text-sm sm:text-base font-normal text-white" href="/">Go To Home Page</a>
            </div>
            <FaChevronRight color="white"/>
        </div>
        
            <div className="flex items-center justify-between gap-[10px] py-[15px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out cursor-pointer">
                <div className="flex items-center gap-[10px]">
                    <RiListOrdered color="white"/>
                    <a className="text-[14px] leading-[20px] font-normal text-white" href="/">Orders</a>
                </div>
                <FaChevronRight color="white"/>
            </div>
            <div className="flex items-center justify-between gap-[10px] py-[15px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out cursor-pointer">
                <div className="flex items-center gap-[10px]">
                    <FaUser color="white"/>
                    <Link className="text-[14px] leading-[20px] font-normal text-white" to={`/user/dashboard/uploadimage`}>Upload Image</Link>
                </div>
                <FaChevronRight color="white"/>
            </div>

            <div className="flex items-center justify-between gap-[10px] py-[15px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out cursor-pointer">
                <div className="flex items-center gap-[10px]">
                    <FaUser color="white"/>
                    <Link className="text-[14px] leading-[20px] font-normal text-white" to={`/user/dashboard/updateprofile`}>My Profile</Link>
                </div>
                <FaChevronRight color="white"/>
            </div>
            <div className="flex items-center justify-between gap-[10px] py-[15px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out cursor-pointer">
                <div className="flex items-center gap-[10px]">
                    <FaAddressCard color="white"/>
                    <Link className="text-[14px] leading-[20px] font-normal text-white" to={`/user/dashboard/address/`}>Addresses</Link>
                </div>
                <FaChevronRight color="white"/>
            </div>
            <div className="flex items-center justify-between gap-[10px] py-[15px] hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out cursor-pointer">
                <div className="flex items-center gap-[10px]">
                    <FaUser color="white"/>
                    <a className="text-[14px] leading-[20px] font-normal text-white" href="/">Request To Be Vendor</a>
                </div>
                <FaChevronRight color="white"/>
            </div>
            
        </div>

        <div>
        <div>
            <div className="bg-blue-500 mt-5 flex items-center justify-center flex-col py-2 sm:py-3 px-3 sm:px-4 gap-2 sm:gap-4 rounded-3 cursor-pointer hover:shadow-lg transform hover:scale-103 transition duration-300 ease-out">
                <BiLogOut color="white"/>
                <p onClick={handleLogOut} className="text-lg text-red-900 font-bold">LOGOUT</p>
            </div>
        </div>
    </div>
</div>
  )
}

export default UserSidebar;