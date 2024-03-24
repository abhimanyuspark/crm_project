import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { roleUsers } from "../../../redux/server/server";
import { Button, Table } from "../../../components";
import { Columns } from "./column";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "../../../components/icons";

const Client = () => {
  const { users, loading } = useSelector((state) => state.users);
  const [globalFilter, setGlobalFilter] = useState("");
  const [date, setDate] = useState({
    start: "",
    end: "",
    select: [],
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(roleUsers("client"));
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
    <div className="flex gap-6 flex-col">
      <div className="flex gap-2 items-center">
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
          data={filterByDate}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </div>
    </div>
  );
};

export default Client;
