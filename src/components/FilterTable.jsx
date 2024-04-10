import React, { useState } from "react";
import { FaFilter, FaTimes } from "react-icons/fa";

const FilterTable = ({ label = "Filter", children, onChangeClear }) => {
  const [open, setOpen] = useState(false);

  const outerStyle = { transition: "opacity 0.5s ease" };
  const innerStyle = { transition: "0.3s ease" };

  return (
    <div className="">
      <div
        className="flex gap-2 items-center text-slate-500 cursor-pointer hover:text-black text-[15px]"
        onClick={() => setOpen(!open)}
      >
        <span>Filter</span>
        <FaFilter size={15} />
      </div>

      {/* Filter Component */}
      <div
        style={outerStyle}
        className={`${
          open ? "opacity-100 left-0" : "opacity-0 left-full"
        } fixed top-0 w-[100vw] h-[100vh] bg-[rgba(0,0,0,0.1)] `}
        onClick={() => setOpen(false)}
      >
        {/*  */}
        <div
          style={innerStyle}
          className={`fixed w-64 h-full bg-white top-[60px] border-x border-slate-300 ${
            open ? "right-0" : "-right-64"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="border-b border-slate-300 p-[11px] flex items-center justify-between text-lg text-slate-500">
            <h2>{label}</h2>
            <FaTimes
              onClick={() => setOpen(false)}
              className="hover:text-black cursor-pointer"
              size={15}
            />
          </div>
          {/* Categories and Filters */}
          <div className="w-full h-[calc(100%-170px)] overflow-auto relative">
            {children}
          </div>

          {/* Clear */}
          <div className="border-t bg-white border-slate-300 p-3">
            <button
              type="reset"
              className="p-2 hover:bg-slate-300 rounded-[4px] text-sm border border-slate-300"
              onClick={onChangeClear}
            >
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTable;
