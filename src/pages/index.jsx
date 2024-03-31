import { lazy } from "react";
import {
  APDashboard,
  Client,
  Employee,
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
} from "./admin/index";

const Login = lazy(() => import("./Login"));
const Not_Found = lazy(() => import("./Not_Found"));
const UnAuth = lazy(() => import("./UnAuth"));
const Settings = lazy(() => import("./settings"));

export {
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
};
