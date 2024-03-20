import React from "react";
import { useSelector } from "react-redux";
import { Calender } from "../../components";

const APDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="py-8 flex gap-2 flex-col">
        <h1 className="text-xl font-bold">Welcome {user?.name}</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-4 grid-rows-1">
        {/* column 1 */}

        <div className="w-full grid gap-4">
          <div className="w-full bg-white rounded-md border border-slate-200">
            <div className="p-4 flex items-start gap-4 border-b border-slate-200">
              <img src={user?.profile} className="w-24 aspect-square" />
              <div className="flex flex-col">
                <h3 className="text-lg font-bold">{user?.name}</h3>
                <p className="text-[15px] font-semibold text-[var(--cl-gr)]">
                  {"Junior"}
                </p>
                <p className="text-sm">Employee : EMP-Id-{user?.id}</p>
              </div>
            </div>

            <div className="flex justify-between items-center p-4">
              {[]?.map((i) => (
                <p key={i}>{i}</p>
              ))}
            </div>
          </div>

          <div className="w-full bg-white rounded-md border border-slate-200">
            <div className="p-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              doloremque doloribus obcaecati saepe ratione! Quisquam
              perspiciatis eligendi reiciendis ab? Nisi officia, repellendus
              molestiae ad natus ab ipsam impedit vitae sint.
            </div>
          </div>
        </div>

        {/* column 2 */}

        <div className="w-full grid gap-4">
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
