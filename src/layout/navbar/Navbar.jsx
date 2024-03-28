import React from "react";
import { IoMdMenu } from "../../components/icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../redux/features/layoutSlice";
import Search from "./Search";
import LogOut from "./Logout";
// import Theme from "./Theme";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <nav className="bg-white border-b border-slate-300 flex items-center justify-between px-8">
      <div className="flex gap-2 items-center text-slate-500">
        <div
          className="sm:hidden block"
          onClick={() => {
            dispatch(toggleMenu(true));
          }}
        >
          <IoMdMenu size={25} className="cursor-pointer hover:text-black" />
        </div>
        <Link to="/" className="font-semibold hover:text-black cursor-pointer">
          Dashboard
        </Link>
      </div>

      <ul className="flex gap-6 items-center">
        {/* <li>
          <Theme />
        </li> */}

        <li>
          <Search />
        </li>

        <li>
          <LogOut />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
