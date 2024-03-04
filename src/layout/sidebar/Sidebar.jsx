import React from "react";
import { useExpand, useSideBar } from "../../hooks";
import Content from "./Content";
import { FaAngleLeft, FaAngleRight } from "../../components/icons";
import SVG from "../../assets/react.svg";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [isOpen] = useSideBar();
  const [expand, toggleExpand] = useExpand();

  const onMouseEnter = () => {
    if (isOpen) return;
    toggleExpand(true);
  };
  const onMouseLeave = () => {
    if (isOpen) return;
    toggleExpand(false);
  };

  return (
    <aside className="relative">
      <div
        style={{
          transition: "0.2s ease-in-out",
        }}
        className={`sm:grid grid-rows-[60px_calc(100vh-120px)_60px] border-r border-slate-300 bg-[var(--bg-dk-bl)] h-full hidden ${
          expand ? "w-[240px] absolute" : "w-full"
        }`}
      >
        <Header open={expand || isOpen} />
        <ul
          id="aside"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          className="overflow-y-scroll overflow-x-hidden select-none"
        >
          <Content />
        </ul>
        <Footer />
      </div>
    </aside>
  );
};

const Header = ({ open }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div
      className={`border-b border-slate-600 flex items-center text-[var(--cl-sky)] p-2`}
    >
      <div
        style={{ transition: "0.3s ease-in-out" }}
        className={`flex flex-col items-start absolute w-24 ${
          open ? "opacity-100" : "left-2 opacity-0"
        }`}
      >
        <h3 className="text-lg font-bold text-center">CRM</h3>
        <p className="text-sm text-white">{user?.name}</p>
      </div>

      <img
        style={{ transition: "0.5s ease-in-out" }}
        loading="lazy"
        src={SVG}
        alt="logo"
        className={`w-auto h-auto rounded-sm p-1 absolute bg-[var(--bg-dk-bl)] ${
          open ? "right-1" : "left-1"
        }`}
      />
    </div>
  );
};

const Footer = () => {
  const [isOpen, toggleSidebar] = useSideBar();

  return (
    <div
      className={`flex items-center border-t border-slate-600 ${
        isOpen ? "justify-between p-2" : "justify-center"
      }`}
    >
      <div className="text-[var(--cl-sky)] cursor-pointer">
        {isOpen ? (
          <FaAngleLeft size={20} onClick={toggleSidebar} />
        ) : (
          <FaAngleRight size={20} onClick={toggleSidebar} />
        )}
      </div>

      {isOpen && (
        <p className="py-[2px] px-1 rounded-sm text-xs text-[var(--cl-sky)] bg-[var(--blue)]">
          ver 1.0.0
        </p>
      )}
    </div>
  );
};

export default Sidebar;
