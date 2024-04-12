import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { userDetails } from "../../../../redux/server/server";
import {
  FaLayerGroup,
  FaCalendar,
  IoMdFemale,
  IoMdMale,
} from "../../../../components/icons";
import { FlConverter } from "../../../../utilities";
import { Container, Image, Menu, PieChartUsage } from "../../../../components";

const ViewClient = ({ intialImage }) => {
  const { user, loading, error } = useSelector((state) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const date = new Date(user?.date);
  const created = date.toLocaleDateString();

  useEffect(() => {
    dispatch(userDetails(id));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="grid gap-8 p-6">
      <div className="grid gap-8 grid-cols-3">
        <Container>
          <div className="flex p-3 justify-between">
            <Image
              src={user?.profile}
              alt="avatar"
              className="w-20 h-24"
              onError={() => intialImage}
            />

            <div>
              <p className="text-base font-bold">{user?.name}</p>
              <p className="text-sm">{user?.jobType}</p>
            </div>

            <Menu>
              <li onClick={() => navigate(`/clients/${id}/edit`)}>Edit</li>
            </Menu>
          </div>
        </Container>

        <Container>
          <div className="flex h-full justify-between items-center p-6">
            <div className="flex h-full flex-col justify-between">
              <h1 className="text-base">Total Projects</h1>
              <p className="text-xl font-bold text-blue-500">
                {user?.projects?.length}
              </p>
            </div>
            <FaLayerGroup size={30} className="text-slate-400" />
          </div>
        </Container>

        <Container>
          <div className="flex h-full justify-between items-center p-6">
            <div className="flex h-full flex-col justify-between">
              <h1 className="text-base">Total Events</h1>
              <p className="text-xl font-bold text-blue-500">
                {user?.events?.length}
              </p>
            </div>
            <FaCalendar size={30} className="text-slate-400" />
          </div>
        </Container>
      </div>

      <div className="grid grid-cols-[1fr_auto] grid-rows-[auto] gap-8">
        <Container>
          <div className="flex gap-5 flex-col p-4">
            <p className="font-bold text-xl">Profile Info</p>

            <Card text="Name" data={user?.name} />
            <Card text="Password" data={user?.password} />
            <Card text="Email" data={user?.email} />
            <Card text="Age" data={user?.age} />

            <Card
              text="Gender"
              data={
                <div className="flex gap-2">
                  {user?.gender !== "Other" && (
                    <span
                      className={`text-lg ${
                        user?.gender === "Male"
                          ? "text-blue-700"
                          : "text-pink-700"
                      }`}
                    >
                      {user?.gender === "Male" ? <IoMdMale /> : <IoMdFemale />}
                    </span>
                  )}
                  {FlConverter(user?.gender)}
                </div>
              }
            />
            <Card text="Visits" data={user?.visits} />
            <Card text="Created" data={created} />
            <Card text="Progress" data={user?.progress} />
            <Card
              text="Status"
              data={
                <p className="flex gap-2 items-center">
                  <span
                    className="w-3 h-3 rounded-full block"
                    style={{ backgroundColor: user?.status?.color }}
                  ></span>
                  {user?.status?.name}
                </p>
              }
            />
          </div>
        </Container>

        <div className="grid gap-8">
          <Container>
            <div className="border-b border-slate-300 p-4">
              <h2 className="text-xl font-bold">Projects</h2>
            </div>
            <div className="p-4">
              <PieChartUsage data={user?.projects} label="Project" />
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

const Card = ({ text, data }) => {
  return (
    <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
      <div className="w-72 text-slate-500">{text}</div>
      <div>{data || "--"}</div>
    </div>
  );
};

export default ViewClient;
