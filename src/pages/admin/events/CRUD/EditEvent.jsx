import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  CancelButton,
  CheckBox,
  Container,
  InputText,
  TextEditor,
} from "../../../../components";
import { FaCheck } from "../../../../components/icons";
import { updateEvent } from "../../../../redux/server/server";
import { updateEventReducer } from "../../../../redux/features/login/reduxLogin";
import DatePicker from "react-datepicker";

const EditEvent = () => {
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { events } = user;
  let event = {};
  events.map((i) => {
    if (i.id === id) {
      event = i;
    }
  });

  const [formData, setFormData] = useState({ ...event });
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
          updateEvent({
            userId: user?.id,
            eventId: id,
            updatedEvent: formData,
          })
        );
        await dispatch(updateEventReducer(formData));
        navigate(-1, { replace: true });
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  };

  return (
    <div>
      <Container>
        <div className="border-b border-slate-300 p-4">
          <h2 className="text-xl font-bold">Update Event</h2>
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

export default EditEvent;