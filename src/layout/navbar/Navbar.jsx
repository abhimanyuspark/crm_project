import React from "react";
import { IoMdMenu } from "../../components/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleMenu } from "../../redux/features/layoutSlice";
import Search from "./Search";
import LogOut from "./Logout";
import { FlConverter } from "../../utilities";
// import Theme from "./Theme";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.users);
  const { pathname } = useLocation();
  const array = pathname.split("/");

  const RenderPathItems = () => {
    return (
      <div className="flex gap-1 items-center">
        {array.map((item, i) => {
          const value = i === 2 ? `${array[1]}/${item}` : item;
          const isLastItem = i === array.length - 1;
          const Item =
            i === 0
              ? "Dashboard"
              : i === 2 && user.id === item
              ? FlConverter(user.name)
              : FlConverter(item);

          return (
            <div className="flex gap-4 items-center" key={i}>
              {isLastItem ? (
                <p className="font-medium w-auto truncate">{Item}</p>
              ) : (
                <Link
                  to={value}
                  className="font-semibold w-auto truncate hover:text-black cursor-pointer flex gap-[2px] items-center"
                >
                  <span>{Item}</span>
                  {<span className="font-bold">.</span>}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <nav className="bg-white border-b border-slate-300 flex items-center justify-between px-8">
      <div className="flex gap-2 items-center text-slate-500">
        {/* Menu Button */}
        <div
          className="sm:hidden block"
          onClick={() => {
            dispatch(toggleMenu(true));
          }}
        >
          <IoMdMenu size={25} className="cursor-pointer hover:text-black" />
        </div>

        <RenderPathItems />
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
