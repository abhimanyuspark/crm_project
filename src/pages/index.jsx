import { lazy } from "react";
import { DashBoard } from "./admin/index";

const Login = lazy(() => import("./Login"));
const Not_Found = lazy(() => import("./Not_Found"));
const UnAuth = lazy(() => import("./UnAuth"));

export { Login, Not_Found, UnAuth, DashBoard };
