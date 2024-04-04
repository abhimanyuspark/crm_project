import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  CancelButton,
  CheckBox,
  Container,
  InputText,
  Select,
  TextEditor,
  Avatar,
  ReactDatePicker,
} from "../../../../components";
import {
  FaEye,
  FaEyeSlash,
  FaCheck,
  FaRandom,
} from "../../../../components/icons";
import { addEventToUser, roleUsers } from "../../../../redux/server/server";
import { addEventReducer } from "../../../../redux/features/login/reduxLogin";
import { FlConverter } from "../../../../utilities";
import { v4 as uuid } from "uuid";
import { useRandomPassword } from "../../../../hooks";

const AddClient = ({ intialImage }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [formData, setFormData] = useState({
    id: uuid(),
    role: ["client"],
    name: "",
    password: "",
    profile: intialImage,
    email: "",
    age: "",
    visits: "",
    jobType: "",
    created: new Date(),
    status: {
      name: "Active",
      color: "#0cf90c",
      id: "4ddf56cf-c71a-4b62-aa46-86661a8e4dca",
    },
    statusMenu: [
      {
        name: "InActive",
        color: "red",
        id: "71a820b1-5002-47b4-8c64-6f197af13d1b",
      },
      {
        name: "Active",
        color: "#0cf90c",
        id: "4ddf56cf-c71a-4b62-aa46-86661a8e4dca",
      },
    ],
    gender: "",
    tasks: [],
    projects: [],
    events: [],
    allowFollowUp: {
      type: "No",
    },
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState({
    name: "",
    created: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormError((p) => ({ ...p, [name]: "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Validate form before submit
    if (true) {
      setFormLoading(true);
      try {
        // await dispatch();
        alert(formData.name);
        // navigate(-1, { replace: true });
      } catch (error) {
        console.log(error);
      }
    }
    setFormLoading(false);
  };

  const Status = (i) => {
    return (
      <div className="flex items-center gap-2">
        <span
          className="w-3 h-3 rounded-full"
          style={{ background: i?.color }}
        ></span>
        <span>{i?.name}</span>
      </div>
    );
  };

  const PasswordComponent = () => {
    return (
      <div className="flex w-full h-full text-slate-600">
        <div
          className="px-2 h-full border-r border-slate-300 flex items-center justify-center hover:bg-slate-200"
          onClick={() => {
            setShow((p) => !p);
          }}
        >
          {show ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
        </div>
        <div
          className="px-2 h-full flex items-center justify-center hover:bg-slate-200"
          onClick={() => {
            const password = useRandomPassword(10);
            setFormData({ ...formData, password });
          }}
        >
          <FaRandom />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Container>
        <div className="border-b border-slate-300 p-4">
          <h2 className="text-xl font-bold">Add Client</h2>
        </div>

        {/* Event Form */}

        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-[1fr_auto] gap-8 p-4 ">
            <div className="grid grid-rows-2 gap-4">
              <div className="grid grid-cols-3 gap-8">
                <InputText
                  label="Name"
                  name="name"
                  type="text"
                  important
                  error={formError.name}
                  value={formData.name}
                  placeholder="Enter a name"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />

                <InputText
                  label="Email"
                  name="email"
                  type="email"
                  important
                  error={formError.email}
                  value={formData.email}
                  placeholder="Enter a email"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                />

                <InputText
                  label="Password"
                  name="password"
                  important
                  type={show ? "text" : "password"}
                  error={formError.password}
                  value={formData.password}
                  placeholder="Enter a password"
                  onChange={(e) => {
                    handleInputChange(e);
                  }}
                  button={<PasswordComponent />}
                />
              </div>

              <div className="grid grid-cols-2 gap-8">
                {/* Created */}
                <div className="flex gap-2 flex-col">
                  <label className="text-base text-slate-600">Created</label>
                  <ReactDatePicker
                    value={formData.created}
                    onChange={(date) =>
                      setFormData((p) => ({ ...p, created: date }))
                    }
                  />
                </div>

                {/* status */}
                <div className="flex gap-2 flex-col">
                  <label className="text-base text-slate-600">Status</label>
                  <Select
                    options={formData.statusMenu}
                    value={formData.status}
                    onChange={(data) => {
                      setFormData((p) => ({ ...p, status: data }));
                    }}
                    optiontemplete={Status}
                    valuetemplete={Status}
                    fields={(i) => i.name}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 flex-col">
              <label className="text-base text-slate-600">Profile image</label>
              <Avatar
                value={formData.profile}
                onChange={(data) => {
                  setFormData({ ...formData, profile: data });
                }}
              />
            </div>
          </div>

          <div className="border-t border-slate-300 p-4 flex gap-4">
            <Button
              text="Submit"
              icon={<FaCheck />}
              type="submit"
              loading={formLoading}
            />
            <CancelButton
              type="button"
              text="Cancel"
              onClick={() => navigate(-1, { replace: true })}
            />
          </div>
        </form>
      </Container>
    </div>
  );
};

export default AddClient;
