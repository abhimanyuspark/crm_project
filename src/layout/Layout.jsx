import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar/Sidebar";
import Navbar from "./navbar/Navbar";
import { useSideBar } from "../hooks";

const Layout = () => {
  const [isOpen] = useSideBar();

  return (
    <div
      style={{
        transition: "0.3s ease-in-out",
      }}
      className={`${
        !isOpen ? "sm:grid-cols-[60px_1fr]" : "sm:grid-cols-[260px_1fr]"
      } grid grid-cols-[0px_1fr] sm:grid-rows-[100vh_1fr] grid-rows-[0px_1fr]`}
    >
      <div>
        <Sidebar />
      </div>
      <div className="grid grid-rows-[60px_1fr]">
        <Navbar />
        <main className="h-[calc(100vh-60px)] overflow-auto p-8 bg-gray-100">
          <Suspense fallback={<p>Loader...</p>}>
            <Outlet />
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;
