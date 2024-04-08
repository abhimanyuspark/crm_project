import React from "react";
import { Button, Calender, Container } from "../../../components/index";
import { useSelector } from "react-redux";
import { FaPlus } from "../../../components/icons";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  return (
    <div className="p-8">
      {user?.role?.includes("admin") && (
        <div className="pb-4">
          <Button
            text={"Events"}
            icon={<FaPlus />}
            onClick={() => {
              navigate("/events/create");
            }}
          />
        </div>
      )}

      <Container>
        <div className="p-8">
          <Calender
            events={user?.events}
            height="600px"
            initialView="dayGridMonth"
          />
        </div>
      </Container>
    </div>
  );
};

export default Events;
