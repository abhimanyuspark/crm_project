import React from "react";
import { useTheme } from "../hooks";
import { FlConverter } from "../utilities";

const Settings = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="p-8">
      <div className="flex gap-2 flex-col bg-white p-4 border border-slate-300 rounded-md">
        <p>Theme</p>
        <div className="flex gap-4 items-center">
          <p className="font-bold" style={{ color: theme ? "blue" : "red" }}>
            {FlConverter(JSON.stringify(theme))}
          </p>
          <button
            type="button"
            onClick={() => {
              toggleTheme();
            }}
            className="p-2 w-auto rounded-sm bg-blue-500 text-white cursor-pointer hover:bg-blue-600"
          >
            Toogle Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
