import React, { useEffect, useState } from "react";
import {
  Button,
  Calender,
  Container,
  Image,
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

  const Templete = (i) => {
    return (
      <div className="flex gap-4 items-center">
        <Image
          className={"w-5 h-5 rounded-sm"}
          src={i?.profile}
          alt={i?.name}
        />
        <div className="flex flex-col">
          <p className="text-sm">{i?.name}</p>
          <p className="text-xs text-slate-400">{i?.role[0]}</p>
        </div>
        {i?.name === user?.name && (
          <span className="px-1 rounded-sm bg-slate-600 text-white text-xs">
            its you
          </span>
        )}
      </div>
    );
  };

  return (
    <>
      {user?.role?.includes("admin") && (
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
              optiontemplete={Templete}
              valuetemplete={Templete}
            />
          </SubNavChild>
        </SubNavBar>
      )}

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
