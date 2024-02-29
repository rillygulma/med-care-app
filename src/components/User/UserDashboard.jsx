import DashboardView from "./DashboardView";
import MainDashboardView from "./MainDashboardView";
import UserSidebar from "./UserSidebar";


const UserDashboard = () => {
  return (
    <div className="flex">
        <div className="basis-[12%] h-[100vh]">
            <UserSidebar/>
        </div>
        <div className="basis-[88%] border">
            <DashboardView/>
            <MainDashboardView/>
        </div>
    
    </div>
  );
};

export default UserDashboard;