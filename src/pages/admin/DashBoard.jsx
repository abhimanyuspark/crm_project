import React from "react";
import { useSelector } from "react-redux";

const DashBoard = () => {
  const { user } = useSelector((state) => state.auth);

  return <div>DashBoard {user?.name}</div>;
};

export default DashBoard;
