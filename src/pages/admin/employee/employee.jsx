import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleUsers } from "../../../redux/server/server";
import { Table } from "../../../components";
import { Columns } from "./column";

const Employee = () => {
  const { users, loading } = useSelector((state) => state.users);
  const [globalFilter, setGlobalFilter] = useState("");
  const [date, setDate] = useState({
    start: "",
    end: "",
    select: [],
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(roleUsers("employee"));
  }, []);

  const filterByDate = useMemo(() => {
    return users?.filter((item) => {
      if (date?.start && date?.end) {
        const d = new Date(item?.date);
        return d >= date?.start && d <= date?.end;
      }
      return true;
    });
  }, [users, date?.start, date?.end]);

  return (
    <div className="p-2 rounded-md border border-slate-200 bg-white">
      <Table
        loading={loading}
        Columns={Columns}
        data={filterByDate}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
    </div>
  );
};

export default Employee;
