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
import { intialData } from "./pages/data.json";
const intialImage = intialData[0].intialImage;

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
            {/* Clients Start */}
            <Route path="/clients" element={<Client />} />
            <Route
              path="/clients/:id"
              element={<ViewClient intialImage={intialImage} />}
            />
            <Route
              path="/clients/add"
              element={<AddClient intialImage={intialImage} />}
            />
            <Route path="/clients/:id/edit" element={<EditClient />} />
            {/* Clients End */}

            {/* Emplyees Start */}
            <Route path="/employees" element={<Employee />} />
            <Route
              path="/employees/:id"
              element={<ViewEmployee intialImage={intialImage} />}
            />
            <Route
              path="/employees/add"
              element={<AddEmployee intialImage={intialImage} />}
            />
            <Route path="/employees/:id/edit" element={<EditEmployee />} />
          </Route>
          {/* Emplyees End */}

          <Route
            element={<RequireAuth roleAccess={[role.Admin, role.Employee]} />}
          >
            {/* Events Start */}
            <Route path="/events" element={<Events />} />
            <Route path="/events/create" element={<AddEvent />} />
            <Route path="/events/:id/edit" element={<EditEvent />} />
            <Route path="/events/:id" element={<ViewEvent />} />
            {/* Events End */}
          </Route>
        </Route>
      </Routes>
      <Toaster position="top-right" />
      <Tooltip id="my-tooltip" />
    </Suspense>
  );
}

export default App;
