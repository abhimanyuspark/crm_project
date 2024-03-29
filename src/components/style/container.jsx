import React from "react";

export const Container = ({ children }) => {
  return (
    <div className="w-full bg-white rounded-md border border-slate-200">
      {children}
    </div>
  );
};
