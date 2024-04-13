import React, { useState } from "react";
import { useTheme } from "../../hooks";
import { Outlet } from "react-router-dom";
import { FlConverter } from "../../utilities";
import { Container } from "../../components";
import Search from "./Search";

const Settings = () => {
  const [tab, setTab] = useState("Profile");

  return (
    <div className="grid lg:grid-cols-[250px_1fr] grid-cols-1">
      <Search value={tab} onChange={(t) => setTab(t)} />

      <div className="p-4">
        <Container>
          <div className="border-b border-slate-300 p-4">
            <h2 className="text-xl font-bold">{tab}</h2>
          </div>
          <Outlet />
        </Container>
      </div>
    </div>
  );
};

const Theme = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <Container className="p-3">
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
    </Container>
  );
};

export default Settings;
