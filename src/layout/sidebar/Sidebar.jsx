import React from "react";
import { useSideBar } from "../../hooks";
import Content from "./Content";
import { FaAngleLeft, FaAngleRight } from "../../components/icons";
import SVG from "../../assets/react.svg";
import { toggleExpand } from "../../redux/features/layoutSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const [isOpen] = useSideBar();
  const { expand } = useSelector((state) => state.layout);
  const dispatch = useDispatch();

  const onMouseEnter = () => {
    if (isOpen) return;
    dispatch(toggleExpand(true));
  };
  const onMouseLeave = () => {
    if (isOpen) return;
    dispatch(toggleExpand(false));
  };

  return (
    <aside
      style={{
        width: isOpen ? "260px" : expand ? "260px" : "60px",
        position: expand ? "relative" : "absolute",
        transition: "0.3s ease-in-out",
      }}
      className="grid grid-rows-[60px_1fr_60px] border-r border-slate-300 bg-[var(--bg-dk-bl)] h-full"
    >
      <Header />
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Content />
      </div>
      <Footer />
    </aside>
  );
};

const Header = () => {
  const [isOpen] = useSideBar();

  return (
    <div
      className={`border-b border-slate-600 flex items-center text-[var(--cl-sky)] ${
        isOpen ? "justify-between p-2" : "justify-center"
      }`}
    >
      {isOpen && <h2 className="text-lg font-bold text-center">CRM</h2>}
      <img
        loading="lazy"
        src={SVG}
        alt="logo"
        className="w-auto h-auto rounded-sm"
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
        <p className="py-1 px-2 rounded-sm text-sm text-[var(--cl-sky)] bg-[var(--blue)]">
          ver 1.0.0
        </p>
      )}
    </div>
  );
};

export default Sidebar;
