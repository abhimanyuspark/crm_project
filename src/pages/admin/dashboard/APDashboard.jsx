import React from "react";
import { useSelector } from "react-redux";
import { Calender, Clock_In, DigitalClock } from "../../../components";
import TaskList from "./TasksList";
// import { makeData } from "../../../data/makeData";

const APDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="flex flex-col gap-8">
      {/* {JSON.stringify(makeData(10))} */}
      <div className="flex justify-between items-center pt-4">
        <h1 className="text-xl font-bold">Welcome {user?.name}</h1>
        <div className="flex gap-4 items-center">
          <DigitalClock />
          <Clock_In />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 grid-rows-1">
        {/*//? column 1 */}
        <div className="w-full flex gap-4 flex-col">
          {/* Profile Card */}
          <div className="w-full bg-white rounded-md border border-slate-200">
            <div className="p-4 flex items-start gap-4 border-b border-slate-200">
              <img src={user?.profile} className="w-24 aspect-square" />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{user?.name}</h3>
                <p className="text-[15px] font-semibold text-[var(--cl-gr)]">
                  {user?.jobType}
                </p>
                <p className="text-sm">Id-{user?.id}</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-4">
              <div className="text-center text-sm">
                <p>{user?.projects?.length}</p>
                <p>Projects</p>
              </div>

              <div className="text-center text-sm">
                <p>{user?.tasks?.length}</p>
                <p>Tasks</p>
              </div>
            </div>
          </div>

          {/* Tasks */}
          <div className="w-full bg-white rounded-md border border-slate-200">
            <TaskList tasks={user?.tasks} />
          </div>
        </div>

        {/*//? column 2 */}
        <div className="w-full flex gap-4 flex-col">
          {/* My Calender */}
          <div className="w-full bg-white rounded-md border border-slate-200">
            <h2 className="text-xl font-bold p-4 border-b border-slate-200">
              My Calender
            </h2>
            <div className="p-4">
              <Calender />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default APDashboard;
