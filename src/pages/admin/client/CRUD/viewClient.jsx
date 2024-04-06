import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userDetails } from "../../../../redux/server/server";
import { IoMdFemale, IoMdMale } from "../../../../components/icons";
import { FlConverter } from "../../../../utilities";

const ViewClient = ({ intialImage }) => {
  const { user, loading, error } = useSelector((state) => state.users);
  const { id } = useParams();
  const dispatch = useDispatch();

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
    <div className="flex gap-6 flex-col">
      <div className="flex items-center justify-between">
        <h2 className="sm:text-2xl text-xl font-bold">{user?.name}</h2>
      </div>

      <div className="flex lg:gap-0 gap-8 lg:flex-row flex-col-reverse lg:justify-between justify-normal bg-white p-8 border border-slate-300 rounded-md">
        <div className="flex gap-5 flex-col">
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Client Id</p>
            <p>CLI_Id_{user?.id}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Name</p>
            <p>{user?.name}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Password</p>
            <p>{user?.password}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Email</p>
            <p>{user?.email}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Age</p>
            <p>{user?.age || "--"}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Gender</p>
            <p className="flex gap-2 items-center">
              <span
                className={`text-lg ${
                  user?.gender === "male" ? "text-blue-700" : "text-pink-700"
                }`}
              >
                {user?.gender === "male" ? <IoMdMale /> : <IoMdFemale />}
              </span>
              {FlConverter(user?.gender)}
            </p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Created</p>
            <p>{created}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Visits</p>
            <p>{user?.visits || "--"}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Progress</p>
            <p>{user?.progress || "--"}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Status</p>
            <p className="flex gap-2 items-center">
              <span
                className="w-3 h-3 rounded-full block"
                style={{ backgroundColor: user?.status?.color }}
              ></span>
              {user?.status?.name}
            </p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Current Projects</p>
            <p>{user?.projects?.length || "--"}</p>
          </div>
          <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
            <p className="font-bold w-72">Current Tasks</p>
            <p>{user?.tasks?.length || "--"}</p>
          </div>
        </div>

        <div className="flex gap-4 flex-col items-center">
          <img
            src={user?.profile}
            alt="profile"
            className="w-32 h-32 rounded-md"
            onError={(e) => (e.currentTarget.srcset = intialImage)}
          />
        </div>
      </div>
    </div>
  );
};

export default ViewClient;
