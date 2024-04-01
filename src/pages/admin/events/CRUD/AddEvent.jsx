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
} from "../../../../components";
import { FaCheck } from "../../../../components/icons";
import { addEventToUser, roleUsers } from "../../../../redux/server/server";
import { addEventReducer } from "../../../../redux/features/login/reduxLogin";
import DatePicker from "react-datepicker";
import { v4 as uuid } from "uuid";

const AddEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const { users } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(users[0]);
  const [client, setClient] = useState("");
  const employees = users?.filter((i) => i.role !== "client");
  const clients = users?.filter((i) => i.role === "client");

  const [formData, setFormData] = useState({
    id: uuid(),
    title: "",
    start: new Date(),
    end: new Date(),
    description: "",
    allDay: false,
  });
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState({
    title: "",
  });

  const validate = (formData) => {
    const err = {};
    ["title"].forEach((f) => {
      if (!formData[f] || !formData[f].trim()) {
        err[f] = `${f} field is required.`;
      }
    });
    setFormError(err);
    return !Object.keys(err).length;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // Validate form before submit
    if (validate(formData)) {
      setLoading(true);
      try {
        await dispatch(
          addEventToUser({
            userId: employee?.id || client?.id,
            event: formData,
          })
        );
        await dispatch(addEventReducer({ id: user?.id, event: formData }));
        navigate(-1, { replace: true });
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    dispatch(roleUsers(""));
  }, []);

  const Template = (e) => {
    return (
      <div className="flex items-center gap-3 px-2">
        <img src={e?.profile} className="w-6 h-6" />

        {e?.name}
        {user.name === e?.name && (
          <span className="text-xs py-[2px] px-1 rounded-sm bg-slate-500 text-white">
            its you
          </span>
        )}
      </div>
    );
  };

  const ValueTemplate = (e) => {
    return (
      <div className="flex items-center gap-2 px-2">
        {e && <img src={e?.profile} className="w-6 h-6" />}
        {e ? e?.name : "--"}
      </div>
    );
  };

  return (
    <div>
      <Container>
        <div className="border-b border-slate-300 p-4">
          <h2 className="text-xl font-bold">Add Event</h2>
        </div>

        {/* Event Form */}

        <form onSubmit={onSubmit}>
          <div className="p-4 flex gap-6 flex-col">
            <div className="grid grid-cols-2 gap-8">
              <InputText
                label="Title"
                name="title"
                important
                error={formError.title}
                value={formData.title}
                onChange={(e) => {
                  const { name, value } = e.target;
                  setFormData({ ...formData, [name]: value });
                  setFormError((p) => ({ ...p, [name]: "" }));
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              {/* start date */}
              <div className="flex gap-2 flex-col">
                <label className="text-base">Start Date</label>
                <DatePicker
                  selected={new Date(formData.start)}
                  onChange={(date) =>
                    setFormData((p) => ({ ...p, start: date }))
                  }
                  showTimeSelect
                  dateFormat="YYYY-MM-dd h:mm:aa"
                  className="w-full border border-slate-300 hover:border-black p-2 rounded-[0.2rem]"
                />
              </div>
              {/* end Date */}
              <div className="flex gap-2 flex-col">
                <label className="text-base">End Date</label>
                <DatePicker
                  selected={new Date(formData.end)}
                  onChange={(date) => setFormData((p) => ({ ...p, end: date }))}
                  showTimeSelect
                  dateFormat="YYYY-MM-dd h:mm:aa"
                  className="w-full border border-slate-300 hover:border-black p-2 rounded-[0.2rem]"
                />
              </div>
            </div>

            {/*  time zone */}
            <div className="grid grid-cols-1 gap-8">
              <div className="flex gap-2 flex-col">
                <label>All Day</label>
                <CheckBox
                  className="w-5"
                  checked={formData.allDay}
                  onChange={() =>
                    setFormData((p) => ({ ...p, allDay: !formData.allDay }))
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="flex gap-2 flex-col">
                <label className="text-base">Employees</label>
                <Select
                  value={employee}
                  options={employees}
                  fields={(i) => i.name}
                  onChange={(e) => setEmployee(e)}
                  optiontemplete={Template}
                  valuetemplete={ValueTemplate}
                />
              </div>

              <div className="flex gap-2 flex-col">
                <label className="text-base">Clients</label>
                <Select
                  value={client}
                  options={clients}
                  onChange={(e) => setClient(e)}
                  fields={(i) => i.name}
                  optiontemplete={Template}
                  valuetemplete={ValueTemplate}
                  emptylist
                />
              </div>
            </div>

            <div className="pb-4">
              <div className="flex gap-2 flex-col">
                <label className="text-base">Description</label>
                <TextEditor
                  value={formData.description}
                  onChange={(data) =>
                    setFormData((p) => ({ ...p, description: data }))
                  }
                />
              </div>
            </div>
          </div>

          <div className="border-t border-slate-300 p-4 flex gap-4">
            <Button
              text="Submit"
              icon={<FaCheck />}
              type="submit"
              loading={loading}
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

export default AddEvent;
