import React from "react";
import { useSelector } from "react-redux";
import { Calender } from "../../components";
// import { makeData } from "../../data/makeData";
// console.log(JSON.stringify(makeData(10)));

const APDashboard = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <div>
        <h1 className="text-xl font-bold py-8">Welcome {user?.name}</h1>
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

          {[1, 2, 3, 4].map((d, i) => (
            <div
              key={i}
              className="w-full bg-white p-8 rounded-md border border-slate-200"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                perferendis aperiam alias cupiditate magnam nostrum nemo tenetur
                accusantium molestias, nihil aspernatur expedita ducimus quae
                voluptate, assumenda delectus fugiat voluptatibus dolores
                nesciunt.
              </p>
            </div>
          ))}
        </div>

        {/* column 2 */}

        <div className="w-full grid gap-4">
          {[1, 2, 3, 4].map((d, i) => (
            <div
              key={i}
              className="w-full bg-white p-8 rounded-md border border-slate-200"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                perferendis aperiam alias cupiditate magnam nostrum nemo tenetur
                accusantium molestias, nihil aspernatur expedita ducimus quae
                voluptate, assumenda delectus fugiat voluptatibus dolores
                nesciunt.
              </p>
            </div>
          ))}

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
