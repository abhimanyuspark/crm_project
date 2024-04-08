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
      className={`${className} rounded-md object-cover`}
      onError={(e) => (e.currentTarget.srcset = onError())}
    />
  );
};

export const SubNavBar = ({ children, className }) => {
  return (
    <div
      className={`${className} flex border-b border-slate-300 w-full h-[50px] sticky top-0 right-0 bg-white z-10`}
    >
      {children}
    </div>
  );
};

export const SubNavChild = ({ children }) => {
  return (
    <div className="flex justify-center items-center px-2 border-x border-slate-300">
      {children}
    </div>
  );
};
