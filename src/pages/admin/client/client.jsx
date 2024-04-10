import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleUsers } from "../../../redux/server/server";
import {
  Button,
  DateRangePicker,
  FilterTable,
  InputText,
  Select,
  SubNavBar,
  SubNavChild,
  Table,
} from "../../../components";
import { Columns } from "./column";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaSearch } from "../../../components/icons";
import { ClientsData } from "../../data.json";
import {
  clearData,
  filterUsers,
  setLoading,
} from "../../../redux/features/roleUsers";
const { followUp, status } = ClientsData;

const Client = () => {
  const { users, loading, clear } = useSelector((state) => state.users);
  const [globalFilter, setGlobalFilter] = useState("");

  const [data, setData] = useState({
    allowFollowUp: { type: "All" },
    status: { name: "All" },
    dates: {
      start: "",
      end: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClear = () => {
    setData((p) => ({
      ...p,
      allowFollowUp: { type: "All" },
      status: { name: "All" },
      dates: {
        start: "",
        end: "",
      },
    }));
    dispatch(clearData());
  };

  const onDatesChange = (dates) => {
    dispatch(clearData(true));
    setData((p) => {
      const newDate = { ...p.dates, ...dates };
      return { ...p, dates: newDate };
    });
  };

  useEffect(() => {
    const getData = async () => {
      dispatch(setLoading(true));
      await dispatch(filterUsers(data));
      dispatch(setLoading(false));
    };
    getData();
  }, [data]);

  useEffect(() => {
    dispatch(roleUsers("client"));
  }, []);

  return (
    <>
      <SubNavBar>
        <SubNavChild>
          <DateRangePicker value={data.dates} onChange={onDatesChange} />
        </SubNavChild>

        <SubNavChild>
          <InputText
            focus={true}
            icon={<FaSearch className="text-slate-500" size={15} />}
            type="search"
            height="33px"
            value={globalFilter}
            placeholder="Search here.."
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
        </SubNavChild>

        {clear && (
          <SubNavChild>
            <button
              className="border border-black p-2 text-sm rounded-md hover:bg-black hover:text-white"
              onClick={onClear}
            >
              Clear
            </button>
          </SubNavChild>
        )}

        <SubNavChild>
          <FilterTable>
            <div className="p-4 flex gap-4 flex-col">
              {/* allow folloe up */}
              <div className="flex gap-2 flex-col">
                <label className="text-base text-slate-600">
                  Allow Follow Up
                </label>
                <Select
                  options={followUp}
                  onChange={(d) => {
                    if (data?.allowFollowUp?.type === d?.type) return null;
                    setData((p) => ({ ...p, allowFollowUp: d }));

                    dispatch(clearData(true));
                  }}
                  value={data?.allowFollowUp}
                  fields={(i) => i?.type}
                />
              </div>

              {/* Status */}
              <div className="flex gap-2 flex-col">
                <label className="text-base text-slate-600">Status</label>
                <Select
                  options={status}
                  onChange={(d) => {
                    if (data?.status?.name === d?.name) return null;
                    setData((p) => ({ ...p, status: d }));

                    dispatch(clearData(true));
                  }}
                  value={data?.status}
                  fields={(i) => i?.name}
                />
              </div>
            </div>

            {/* Clear */}
            <div className="border-t border-slate-300 p-3 absolute bottom-0 w-full">
              <button
                type="reset"
                className="p-2 hover:bg-slate-300 rounded-[4px] text-sm border border-slate-300"
                onClick={() =>
                  setData((p) => ({
                    ...p,
                    allowFollowUp: { type: "All" },
                    status: { name: "All" },
                  }))
                }
              >
                Clear
              </button>
            </div>
          </FilterTable>
        </SubNavChild>
      </SubNavBar>

      <div className="p-6 flex gap-6 flex-col">
        <div className="flex gap-2 items-center justify-between ">
          <Button
            text="Add Client"
            icon={<FaPlus />}
            type="button"
            onClick={() => {
              navigate("/clients/add");
            }}
          />
        </div>

        <div className="p-2 rounded-md border border-slate-200 bg-white">
          <Table
            loading={loading}
            Columns={Columns}
            data={users}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
      </div>
    </>
  );
};

export default Client;
