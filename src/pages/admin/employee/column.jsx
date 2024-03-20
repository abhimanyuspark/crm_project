import { CheckBox } from "../../../components/style/inputs";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, Select } from "../../../components";

export const Columns = [
  {
    id: "select",
    enableSorting: false,
    header: ({ table }) => {
      return (
        <CheckBox
          checked={table.getIsAllRowsSelected()}
          indeterminate={table.getIsSomeRowsSelected()}
          onChange={table.getToggleAllRowsSelectedHandler()}
        />
      );
    },
    cell: ({ row }) => {
      return (
        <CheckBox
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          indeterminate={row.getIsSomeSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      );
    },
  },
  {
    accessorKey: "index",
    header: "Id",
    cell: (info) => {
      const index = info.row.index;
      return <span>{index + 1}</span>;
    },
    enableSorting: true,
    sortingFn: (row1, row2) => {
      return row1.index > row2.index ? -1 : 1;
    },
    sortDescFirst: false,
    invertSorting: true,
  },
  {
    accessorKey: "profile",
    enableSorting: false,
    header: () => "Profile",
    cell: (info) => {
      const value = info.getValue();
      return value ? (
        <img
          src={value}
          alt="profile"
          className="w-10 aspect-square rounded-full"
        />
      ) : (
        <img alt="profile" className="w-10 aspect-square rounded-full" />
      );
    },
  },
  {
    accessorKey: "name",
    header: () => "Name",
    cell: (info) => {
      const value = info.getValue();
      return (
        <div>
          <p>{value}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: () => <span>Date</span>,
    cell: (info) => {
      const value = info.getValue();
      const date = new Date(value);
      return <span>{date.toLocaleDateString()}</span>;
    },
    sortDescFirst: false,
  },
  {
    accessorKey: "age",
    header: () => "Age",
    sortDescFirst: false,
    cell: (info) => {
      const value = info.getValue();
      return value ? <>{value}</> : "--";
    },
  },
  {
    accessorKey: "visits",
    sortDescFirst: false,
    header: () => <span>Visits</span>,
    cell: (info) => {
      const value = info.getValue();
      return value ? <>{value}</> : "--";
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const value = info.getValue();

      return value ? (
        <div className="flex items-center gap-2">
          <span
            style={{ backgroundColor: value?.color }}
            className="w-3 h-3 rounded-full"
          ></span>
          <span>{value?.name}</span>
        </div>
      ) : (
        "--"
      );
    },
    sortingFn: (row1, row2, column) => {
      return row1.getValue(column).name > row2.getValue(column).name ? -1 : 1;
    },
    sortDescFirst: false,
    invertSorting: true,
  },
  {
    accessorKey: "id",
    enableSorting: false,
    header: () => "Actions",
    cell: (info) => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const location = useLocation();
      const { id, name } = info.row.original;

      const Edit = (id) => {
        alert(id);
        // navigate(`/users/update/${id}`, { state: { from: location } });
      };
      const View = (id) => {
        navigate(`/users/details/${id}`, { state: { from: location } });
      };
      const Delete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: `You want to delete ${name} user!`,
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete!",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(deleteUser(id));
            dispatch(deleteUserReducer(id));
            toast.success(`${name} deleted successfull`, {
              position: "top-right",
            });
          }
        });
      };

      return (
        <Menu>
          <li
            onClick={() => {
              Edit(id);
            }}
          >
            Edit
          </li>
          <li
            onClick={() => {
              View(id);
            }}
          >
            View
          </li>
          <li
            onClick={() => {
              Delete(id);
            }}
          >
            Delete
          </li>
        </Menu>
      );
    },
  },
];
