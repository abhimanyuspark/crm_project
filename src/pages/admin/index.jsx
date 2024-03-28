import { lazy } from "react";

const APDashboard = lazy(() => import("./dashboard/APDashboard"));
const Employee = lazy(() => import("./employee/employee"));
const Client = lazy(() => import("./client/client"));
const AddClient = lazy(() => import("./client/CRUD/addClient"));
const EditClient = lazy(() => import("./client/CRUD/editClient"));
const ViewClient = lazy(() => import("./client/CRUD/viewClient"));
const AddEmployee = lazy(() => import("./employee/CRUD/addEmployee"));
const EditEmployee = lazy(() => import("./employee/CRUD/editEmployee"));
const ViewEmployee = lazy(() => import("./employee/CRUD/viewEmployee"));

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
