import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="w-full bg-white rounded-md border border-slate-200">
      {children}
    </div>
  );
};

export const Image = ({ src, alt, className, onError }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className} w-auto h-full rounded-md object-cover`}
      onError={(e) => (e.currentTarget.srcset = onError())}
    />
  );
};

export const SubNavBar = ({ children }) => {
  return (
    <div className="flex border-b border-slate-300 w-[calc(100%-240px)] h-[60px] fixed top-[60px] right-0 bg-white">
      {children}
    </div>
  );
};
