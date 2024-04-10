import React, { useEffect, useState } from "react";
import {
  Button,
  Calender,
  Container,
  Select,
  SubNavBar,
  SubNavChild,
} from "../../../components/index";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus } from "../../../components/icons";
import { useNavigate } from "react-router-dom";
import { roleUsers } from "../../../redux/server/server";

const Events = () => {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedUser, setSelectedUser] = useState(user);

  useEffect(() => {
    dispatch(roleUsers(""));
  }, []);

  return (
    <>
      <SubNavBar>
        <SubNavChild>
          <Select
            width="300px"
            value={selectedUser}
            options={users}
            fields={(i) => i.name}
            onChange={(data) => {
              setSelectedUser(data);
            }}
          />
        </SubNavChild>
      </SubNavBar>

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
              events={selectedUser?.events}
              height="600px"
              initialView="dayGridMonth"
              userId={selectedUser?.id}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Events;
