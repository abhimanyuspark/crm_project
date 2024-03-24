import React from "react";
import { useParams } from "react-router-dom";

const ViewClient = () => {
  const { id } = useParams();

  return <div>ViewClient</div>;
};

export default ViewClient;
