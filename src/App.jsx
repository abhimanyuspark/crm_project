import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  Login,
  Not_Found,
  UnAuth,
  APDashboard,
  Client,
  Employee,
  Settings,
} from "./pages";
import { RequireAuth, PersistenceAuth } from "./components/index";
import { Tooltip } from "react-tooltip";
import { Toaster } from "react-hot-toast";

function App() {
  const role = {
    Admin: "admin",
    Employee: "employee",
    Client: "client",
  };

  return (
    <Suspense fallback="Loading...">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/unAuthorized" element={<UnAuth />} />
        <Route path="*" element={<Not_Found />} />

        <Route element={<PersistenceAuth />}>
          <Route
            element={
              <RequireAuth
                roleAccess={[role.Admin, role.Employee, role.Client]}
              />
            }
          >
            <Route path="/" element={<APDashboard />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route element={<RequireAuth roleAccess={[role.Admin]} />}>
            <Route path="/clients" element={<Client />} />
            <Route path="/employees" element={<Employee />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
      <Tooltip id="my-tooltip" />
    </Suspense>
  );
}

export default App;
