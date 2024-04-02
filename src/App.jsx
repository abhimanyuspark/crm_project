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
  AddClient,
  AddEmployee,
  EditClient,
  EditEmployee,
  ViewClient,
  ViewEmployee,
  Events,
  AddEvent,
  ViewEvent,
  EditEvent,
} from "./pages";
import { RequireAuth, PersistenceAuth, Loader } from "./components/index";
import { Tooltip } from "react-tooltip";
import { Toaster } from "react-hot-toast";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const role = {
    Admin: "admin",
    Employee: "employee",
    Client: "client",
  };

  return (
    <Suspense fallback={<Loader />}>
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
            <Route path="/clients/:id" element={<ViewClient />} />
            <Route path="/clients/add" element={<AddClient />} />
            <Route path="/clients/:id/edit" element={<EditClient />} />

            <Route path="/employees" element={<Employee />} />
            <Route path="/employees/:id" element={<ViewEmployee />} />
            <Route path="/employees/add" element={<AddEmployee />} />
            <Route path="/employees/:id/edit" element={<EditEmployee />} />
          </Route>

          <Route
            element={<RequireAuth roleAccess={[role.Admin, role.Employee]} />}
          >
            <Route path="/events" element={<Events />} />
            <Route path="/events/create" element={<AddEvent />} />
            <Route path="/events/:id/edit" element={<EditEvent />} />
            <Route path="/events/:id" element={<ViewEvent />} />
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" />
      <Tooltip id="my-tooltip" />
    </Suspense>
  );
}

export default App;
