import { lazy } from "react";

const Login = lazy(() => import("./login/Login"));
const Not_Found = lazy(() => import("./Not_Found"));

export { Login, Not_Found };
