import { lazy } from "react";

const APDashboard = lazy(() => import("./APDashboard"));
const Employee = lazy(() => import("./employee/employee"));
const Client = lazy(() => import("./client/client"));
const AddClient = lazy(() => import("./client/addClient"));
const EditClient = lazy(() => import("./client/editClient"));
const ViewClient = lazy(() => import("./client/viewClient"));
const AddEmployee = lazy(() => import("./employee/addEmployee"));
const EditEmployee = lazy(() => import("./employee/editEmployee"));
const ViewEmployee = lazy(() => import("./employee/viewEmployee"));

export {
  APDashboard,
  Employee,
  Client,
  AddClient,
  AddEmployee,
  EditClient,
  EditEmployee,
  ViewClient,
  ViewEmployee,
};
