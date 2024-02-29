import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./Register/Signup";
import LoginForm from "./Register/LoginForm";
import Register from "./Register/Register";
import Services from "./Services/Services";
import UserDashboard from "./User/UserDashboard";
import Profile from "./User/Profile";
import Home from "./Home/Home";
import UploadImage from "./User/UploadImage";
import Address from "./User/Address";
//import Others from "./User/Others";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Home/>
              <Routes>
                <Route path="/services" element={<Services />} index />
              </Routes>
            </>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/user/dashboard/updateprofile/" element={<Profile />} />
        <Route path="/user/dashboard/uploadimage/" element={<UploadImage />} />
        <Route path="/user/dashboard/address/" element={<Address />} />
        {/* <Route path="/user/dashboard/others/" element={<Others />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default router;
