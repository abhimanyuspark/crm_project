import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container, Menu } from "../../../../components";
import { deleteUserEvent } from "../../../../redux/server/server";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { deletEventReducer } from "../../../../redux/features/login/reduxLogin";

const ViewEvent = () => {
  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/events";
  const { events } = user;

  let event = {};
  events.map((i) => {
    if (i.id === id) {
      event = i;
    }
  });

  const Delete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert ${event?.title} this event!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletEventReducer(id)),
          toast.promise(
            dispatch(deleteUserEvent({ userId: user?.id, eventId: id })),
            {
              loading: "loading...",
              success: "Deleted Successfully!",
              error: "Error in Deleting Event.",
            },
            {
              position: "top-center",
            }
          );
        navigate(from, { replace: true });
      }
    });
  };

  const Update = () => {
    navigate(`/events/${id}/edit`);
  };

  const start = new Date(event.start).toISOString();
  const end = new Date(event.end).toISOString();

  return (
    <div className="p-6">
      <div className="pb-4">
        <h2 className="text-2xl font-bold">Event Details</h2>
      </div>

      <Container>
        {/* Event Details */}
        <div className="p-8 flex justify-between">
          <div className="flex flex-col gap-4">
            <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
              <p className="font-bold w-72">Event Id</p>
              <p>{event?.id}</p>
            </div>
            <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
              <p className="font-bold w-72">Title</p>
              <p>{event?.title}</p>
            </div>
            <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
              <p className="font-bold w-72">Description</p>
              {/* <p>{event?.description}</p> */}
              <div dangerouslySetInnerHTML={{ __html: event?.description }} />
            </div>
            <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
              <p className="font-bold w-72">Start Date</p>
              <p>{start}</p>
            </div>
            <div className="w-full flex sm:gap-0 gap-1 sm:items-center sm:flex-row flex-col">
              <p className="font-bold w-72">End Date</p>
              <p>{end}</p>
            </div>
          </div>

          {user?.role?.includes("admin") && (
            <Menu>
              <li onClick={Update}>Edit</li>
              <li onClick={Delete}>Delete</li>
            </Menu>
          )}
        </div>
      </Container>
    </div>
  );
};

export default ViewEvent;
