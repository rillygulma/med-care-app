import { FaUser } from 'react-icons/fa';
import { MdAddShoppingCart } from "react-icons/md";
import { MdPreview } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";

const MainDashboardView = () => {
  return (
    <div className="p-4 bg-gray-100">
    <h1 className="text-blue-500 text-2xl font-semibold mb-6">Dashboard</h1>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500 px-4 py-6 flex items-center justify-between cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
        <div>
          <h2 className="text-blue-500 text-xs font-bold">TOTAL ORDER</h2>
        </div>
        <MdAddShoppingCart className="text-blue-500" size={28} />
      </div>

        <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500 px-4 py-6 flex items-center justify-between cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div>
            <h2 className="text-blue-500 text-xs font-bold">PENDING ORDERS</h2>
          </div>
          <MdAddShoppingCart className="text-blue-500" fontSize={28} />
        </div>

        <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500 px-4 py-6 flex items-center justify-between cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div>
            <h2 className="text-blue-500 text-xs font-bold">COMPLETE ORDER</h2>
          </div>
          <MdAddShoppingCart className="text-blue-500" fontSize={28} />
        </div>
        <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500 px-4 py-6 flex items-center justify-between cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div>
            <h2 className="text-blue-500 text-xs font-bold">REVIEWS</h2>
          </div>
          <MdPreview className="text-blue-500" fontSize={28} />
        </div>
        <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500 px-4 py-6 flex items-center justify-between cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div>
            <h2 className="text-blue-500 text-xs font-bold">WISHLIST</h2>
          </div>
          <TbJewishStar className="text-blue-500" fontSize={28} />
        </div>

        <div className="bg-white rounded-lg shadow-md border-l-4 border-blue-500 px-4 py-6 flex items-center justify-between cursor-pointer hover:shadow-lg transform hover:scale-105 transition duration-300 ease-out">
          <div>
            <h2 className="text-blue-500 text-xs font-bold">PROFILE</h2>
          </div>
          <FaUser className="text-blue-500" fontSize={28} />
        </div>

      </div>
    </div>
  );
};

export default MainDashboardView;