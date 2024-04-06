import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  CancelButton,
  Container,
  InputText,
  Select,
  Avatar,
  ReactDatePicker,
  formValidation,
} from "../../../../components";
import {
  FaEye,
  FaEyeSlash,
  FaCheck,
  FaRandom,
} from "../../../../components/icons";
import { toast } from "react-hot-toast";
import { editUser, userDetails } from "../../../../redux/server/server";
import { useRandomPassword } from "../../../../hooks";

const EditClient = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const FollowUp = [
    {
      type: "Yes",
    },
    {
      type: "No",
    },
  ];
  const Genders = ["Male", "Female", "Other"];

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    id: id,
    role: "",
    name: "",
    password: "",
    profile: "",
    email: "",
    age: "",
    visits: "",
    jobType: "",
    date: "",
    status: {},
    statusMenu: [],
    gender: "", //default
    tasks: [],
    projects: [],
    events: [],
    allowFollowUp: {}, //default
  });
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    setFormError((p) => ({ ...p, [name]: "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const error = formValidation(formData);
    const isValid = Object.keys(error).length === 0;

    if (isValid) {
      setFormLoading(true);
      try {
        toast.promise(dispatch(editUser(formData)), {
          loading: "Saving user...",
          success: "User saved!",
          error: `Failed to save user: ${error.message}`,
        });
        navigate(-1, { replace: true });
        setFormLoading(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      setFormError((p) => ({ ...p, ...error }));
    }
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
            setFormData((p) => ({ ...p, password: password }));
            setFormError((p) => ({ ...p, password: "" }));
          }}
        >
          <FaRandom />
        </div>
      </div>
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(userDetails(id));
      const data = response.payload;
      if (data) {
        setFormData((p) => ({ ...p, ...data }));
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Container>
        <div className="border-b border-slate-300 p-4">
          <h2 className="text-xl font-bold">Update Client</h2>
        </div>

        {/* Event Form */}

        <form onSubmit={onSubmit}>
          <div className="p-4 grid gap-4">
            <div className="grid lg:grid-cols-[1fr_176px] lg:gap-8 gap-4">
              <div className="grid gap-4">
                {/* Name, Email, Password Fields */}
                <div className="grid grid-cols-3 gap-8">
                  <InputText
                    label="Name"
                    name="name"
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
                    type="text"
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

                <div className="grid lg:grid-cols-3 grid-cols-2 gap-8">
                  {/* Created */}
                  <div className="flex gap-2 flex-col">
                    <label className="text-base text-slate-600">Created</label>
                    <ReactDatePicker
                      value={formData.date}
                      onChange={(date) =>
                        setFormData((p) => ({ ...p, date: date }))
                      }
                    />
                  </div>

                  {/* Gender */}
                  <div className="flex gap-2 flex-col">
                    <label className="text-base text-slate-600">Gender</label>
                    <Select
                      options={Genders}
                      value={formData.gender}
                      onChange={(data) => {
                        setFormData((p) => ({ ...p, gender: data }));
                      }}
                      fields={(i) => i}
                    />
                  </div>
                </div>
              </div>

              {/* Profile Picture */}
              <div className="flex gap-2 flex-col">
                <label className="text-base text-slate-600">
                  Profile Picture
                </label>
                <Avatar
                  value={formData.profile}
                  onChange={(data) => {
                    setFormData((p) => ({ ...p, profile: data }));
                  }}
                />
              </div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1fr_176px] grid-cols-2 gap-8">
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
              {/* Follow Up */}
              <div className="flex gap-2 flex-col">
                <label className="text-base text-slate-600">Follow Up</label>
                <Select
                  options={FollowUp}
                  value={formData.allowFollowUp}
                  onChange={(data) => {
                    setFormData((p) => ({ ...p, allowFollowUp: data }));
                  }}
                  fields={(i) => i.type}
                />
              </div>
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

export default EditClient;
