import { NavLink, Outlet } from 'react-router-dom';

const ProfileLayout = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <div className="w-full md:w-1/4">
        <nav className="bg-white rounded shadow p-4 space-y-2">
          <NavLink
            to="" end className={({ isActive }) =>`block px-4 py-2 rounded hover:bg-gray-100 ${isActive ? 'bg-blue-500 text-white' : 'text-gray-800'}`}>
            Account Info
          </NavLink>
          <NavLink  to="orders"  className={({ isActive }) => `block px-4 py-2 rounded hover:bg-gray-100 ${ isActive ? 'bg-blue-500 text-white' : 'text-gray-800' }` } >
            Orders
          </NavLink>
        </nav>
      </div>

      <div className="w-full md:flex-1">
        <div className="bg-white rounded shadow p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
