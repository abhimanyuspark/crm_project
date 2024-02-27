import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Login, Not_Found, UnAuth, DashBoard } from "./pages";
import { RequireAuth, PersistenceAuth } from "./components/index";

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
            <Route path="/" element={<DashBoard />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
