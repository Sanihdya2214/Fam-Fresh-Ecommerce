import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { HiOutlineUserCircle } from "react-icons/hi";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };

  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <header className="shadow-md w-full z-100 m-0 h-30 px-2 md:px-4 z-50 bg-green-400 flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              className="h-36 w-auto mr-2 transform scale-100 hover:scale-110 transition duration-300"
              alt="Farm Logo"
            />
            <h1 className="text-4xl font-bold">Farm Fresh</h1>
          </div>
        </Link>
      </div>
      <div className="flex items-center gap-4 ml-auto">
        <nav className="hidden md:flex gap-6 text-lg">
          <Link
            to="/"
            style={{
              transition: "all 0.3s",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            className="hover:underline hover:scale-110 hover:text-gray-800"
          >
            Home
          </Link>
          <Link
            to="/menu/:filterby"
            style={{
              transition: "all 0.3s",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            className="hover:underline hover:scale-110 hover:text-gray-800"
          >
            Menu
          </Link>
          <Link
            to="/about"
            style={{
              transition: "all 0.3s",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            className="hover:underline hover:scale-110 hover:text-gray-800"
          >
            About
          </Link>
          <Link
            to="/contact"
            style={{
              transition: "all 0.3s",
              textDecoration: "none",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
            className="hover:underline hover:scale-110 hover:text-gray-800"
          >
            Contact
          </Link>
        </nav>
        <Link to="/cart" className="text-3xl text-slate-600 relative">
          <BsCartFill />
          <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
            {cartItemNumber.length}
          </div>
        </Link>
        <div
          className="text-3xl text-slate-600 relative"
          onClick={handleShowMenu}
        >
          <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md hover:scale-110 transition duration-300">
            {userData._id ? ( // Check if userData._id is truthy
              <img src={userData.image} className="h-full w-full" alt="User" />
            ) : (
              <HiOutlineUserCircle />
            )}
          </div>
          {showMenu && (
            <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
              {userData.email===process.env.REACT_APP_ADMIN_EMAIL && <Link to={"newproduct"} className="whitespace-nowrap cursor-pointer px-2">
                New product
                 </Link>}
              {userData._id ? ( // Check if userData._id is truthy
                <p
                  className="cursor-pointer text-white px-2 bg-red-500"
                  onClick={handleLogout}
                >
                  Logout ({userData.firstName})
                </p>
              ) : (
                <Link to="/login" className="whitespace-nowrap cursor-pointer px-2">
                  Login
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;