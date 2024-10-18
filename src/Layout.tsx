import { Link, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#00d2ff] to-[#3affff] flex flex-col">
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
      <div className="bg-gradient-to-r  from-[#11998e] to-[#38ef7d] h-20 flex justify-around items-center">
        <Link to="/calendar">
          <img className="w-10" src="/icons/calendar.svg" alt="calendar" />
        </Link>
        <Link to="/">
          <img className="w-20 " src="/icons/dumbbell.svg" />
        </Link>
        <Link to="/reports">
          <img className="w-10" src="/icons/heart.svg" />
        </Link>
      </div>
    </div>
  );
}

export default Layout;
