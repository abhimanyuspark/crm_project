import { lazy } from "react";

const APDashboard = lazy(() => import("./APDashboard"));
const Employee = lazy(() => import("./employee/employee"));
const Client = lazy(() => import("./client/client"));

export { APDashboard, Employee, Client };
