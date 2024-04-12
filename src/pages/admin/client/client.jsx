import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleUsers } from "../../../redux/server/server";
import {
  Button,
  ClearButton,
  DateRangePicker,
  FilterTable,
  InputText,
  Select,
  SubNavBar,
  SubNavChild,
  Table,
} from "../../../components";
import { Columns } from "./column";
import { useNavigate, useLocation } from "react-router-dom";
import { FaPlus, FaSearch } from "../../../components/icons";
import { ClientsData } from "../../data.json";
import { filterUsers, setLoading } from "../../../redux/features/roleUsers";
const { followUp, status } = ClientsData;

const Client = () => {
  const { users, loading } = useSelector((state) => state.users);
  const [globalFilter, setGlobalFilter] = useState("");
  const [clear, setClear] = useState(false);

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
  const { pathname } = useLocation();

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
    setClear(false);
    setGlobalFilter("");
  };

  const onDatesChange = (dates) => {
    setClear(true);
    setData((p) => {
      const newDate = { ...p.dates, ...dates };
      return { ...p, dates: newDate };
    });
  };

  useEffect(() => {
    if (globalFilter === "") {
      setClear(false);
    }
  }, [globalFilter]);

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
  }, [pathname]);

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
            onChange={(e) => {
              setGlobalFilter(e.target.value);
              setClear(true);
            }}
          />
        </SubNavChild>

        {clear && (
          <SubNavChild>
            <div className="px-1">
              <ClearButton onClick={onClear} />
            </div>
          </SubNavChild>
        )}

        <SubNavChild>
          <FilterTable
            label="Filter Clients"
            onChangeClear={() =>
              setData((p) => ({
                ...p,
                allowFollowUp: { type: "All" },
                status: { name: "All" },
              }))
            }
          >
            <div className="p-4 flex gap-4 flex-col">
              {/* allowFollowUp */}
              <div className="flex gap-2 flex-col">
                <label className="text-base text-slate-600">
                  Allow Follow Up
                </label>
                <Select
                  options={followUp}
                  onChange={(d) => {
                    if (data?.allowFollowUp?.type === d?.type) return null;
                    setData((p) => ({ ...p, allowFollowUp: d }));
                    setClear(true);
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
                    setClear(true);
                  }}
                  value={data?.status}
                  fields={(i) => i?.name}
                />
              </div>
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
