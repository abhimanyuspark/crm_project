import React from "react";
import { FaPowerOff, IoMdMenu } from "../../components/icons";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { logout } from "../../redux/features/login/reduxLogin";
import { useTheme } from "../../hooks";
import { toggleMenu } from "../../redux/features/layoutSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-white text-slate-500 border-b border-slate-300 flex items-center justify-between px-6">
      <div className="flex gap-2 items-center">
        <div
          className="sm:hidden block"
          onClick={() => {
            dispatch(toggleMenu(true));
          }}
        >
          <IoMdMenu size={25} className="cursor-pointer hover:text-black" />
        </div>
        <Link to="/" className="font-semibold hover:text-black cursor-pointer">
          DashBoard
        </Link>
      </div>

      <ul className="flex gap-2 items-center">
        <li
          data-tooltip-id="my-tooltip"
          data-tooltip-content="logout"
          data-tooltip-place="bottom"
          className="cursor-pointer hover:text-black"
        >
          <LogOut />
        </li>
        {/* <li className="cursor-pointer">
          <Theme />
        </li> */}
      </ul>
    </nav>
  );
};

const LogOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        navigate("/login", { replace: true }); // Redirect to the login page
      }
    });
  };

  return <FaPowerOff onClick={handleLogout} />;
};

const Theme = () => {
  const [isOpen, toggleTheme] = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="bg-blue-500 p-2 text-white rounded-sm"
    >
      Theme {JSON.stringify(isOpen)}
    </button>
  );
};

export default Navbar;
