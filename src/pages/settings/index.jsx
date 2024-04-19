import { lazy } from "react";

const Settings = lazy(() => import("./settings"));
const ProfileTab = lazy(() => import("./ProfileTab"));

export { Settings, ProfileTab };
