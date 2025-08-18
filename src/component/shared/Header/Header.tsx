import HeaderBasket from "@/component/HeaderBasket/HeaderBasket";
import HeaderBasketMobileOnly from "@/component/HeaderBasketMobileOnly/HeaderBasketMobileOnly";
import HeaderWishList from "@/component/HeaderWishList/HeaderWishList";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authLogout } from "@/redux/Slices/authSlice";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const {accessToken,} = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  return (
    <header className="bg-gradient-to-b from-white to-gray-100 shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 relative">
        <h1 className="text-2xl font-bold">
          Our <span className="bg-cyan-400 text-white px-2 py-1 rounded">eCom</span>
        </h1>
        <button
          className="sm:hidden text-xl absolute right-4 top-1/2 -translate-y-1/2"
          onClick={() => setMenuOpen((prev) => !prev)}>
          ☰
        </button>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <HeaderWishList/>
          <HeaderBasket/>
        </div>
      </div>
      <nav
        className={`bg-gray-800 text-white text-sm ${menuOpen ? "block" : "hidden"} sm:block`}>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-2 space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
            <Link to="/" className="hover:text-cyan-400">Home</Link>
            <Link to="/categories" className="hover:text-cyan-400">Categories</Link>
            <Link to="/about-us" className="hover:text-cyan-400">About</Link>
          </div>
       <div className="flex flex-col sm:flex-row sm:space-x-4 w-full sm:w-auto items-start sm:items-center">
            {!accessToken? <>
            <Link to="/login" className="hover:text-cyan-400">Login</Link>
            <Link to="/register" className="hover:text-cyan-400">Register</Link>
            </>:<>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="hover:text-cyan-400 flex items-center gap-1">
                More 
              </button>

              {dropdownOpen && (
                <div className={`${window.innerWidth < 640 ? "relative mt-2" : "absolute mt-2"} w-48 bg-white text-black rounded shadow-lg z-50 sm:right-0 sm:left-auto`}>
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}> Profile
                </Link>

                <Link to="/profile/orders" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setDropdownOpen(false)}>  Orders
                </Link>
                  <hr className="border-t border-gray-200" />
 <button
  className="block px-4 py-2 hover:bg-gray-100 w-full text-left"
  onClick={() => {
    dispatch(authLogout());
    navigate('/');
  }}
>
  Log out
</button>

                </div>
              )}
            </div>
            </>}

          </div>

<div
      className="relative cursor-pointer block sm:hidden"
      onClick={() => navigate('/cart')}
    >
      <HeaderBasketMobileOnly />
    </div>

        </div>
      </nav>
    </header>
  );
};

export default Header;
