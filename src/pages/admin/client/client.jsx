import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleUsers } from "../../../redux/server/server";
import {
  Button,
  DateRangePicker,
  InputText,
  KanBan,
  SubNavBar,
  SubNavChild,
  Switch,
  Table,
  rangePresets,
} from "../../../components";
import { Columns } from "./column";
import { useNavigate } from "react-router-dom";
import { FaList, FaPlus, BsKanBan, FaSearch } from "../../../components/icons";

const Client = () => {
  const { users, loading } = useSelector((state) => state.users);
  const [globalFilter, setGlobalFilter] = useState("");
  const [tab, setTab] = useState(true);
  const [dates, setDates] = useState({
    start: rangePresets[6].value[0],
    end: rangePresets[6].value[1],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(roleUsers("client"));
  }, []);

  const filterByDate = useMemo(() => {
    return users?.filter((item) => {
      if (dates?.start && dates?.end) {
        const d = new Date(item?.date);
        return d >= dates?.start && d <= dates?.end;
      }
      return true;
    });
  }, [users, dates?.start, dates?.end]);

  return (
    <>
      <SubNavBar>
        <SubNavChild>
          <DateRangePicker value={dates} onChange={setDates} />
        </SubNavChild>
        <SubNavChild>
          <InputText
            focus={true}
            icon={<FaSearch className="text-slate-500" size={15} />}
            type="search"
            height="35px"
            placeholder="Search here.."
            onChange={(e) => setGlobalFilter(e.target.value)}
          />
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

          {/* <Switch
          value={tab}
          onChange={(b) => setTab(b)}
          icon1={<FaList />}
          icon2={<BsKanBan size={20} />}
        /> */}
        </div>

        {/* Switch to table to kanban */}

        {tab ? (
          <div className="p-2 rounded-md border border-slate-200 bg-white">
            <Table
              loading={loading}
              Columns={Columns}
              data={filterByDate}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </div>
        ) : (
          <div>
            <KanBan />
          </div>
        )}
      </div>
    </>
  );
};

export default Client;
