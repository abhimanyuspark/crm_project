import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { FlConverter } from "../utilities";
import { useDispatch } from "react-redux";
import { addEventToUser, deleteUserEvent } from "../redux/server/server";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";

const Calender = ({ height = "400px", events = [], id }) => {
  const dispatch = useDispatch();

  function handleEventClick(clickInfo) {
    const eventId = clickInfo.event.id;

    Swal.fire({
      title: "Are you sure?",
      text: `You won't be able to revert ${clickInfo?.event?.title} this event!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        clickInfo.event.remove();
        toast.promise(
          dispatch(deleteUserEvent({ userId: id, eventId: eventId })),
          {
            loading: "loading...",
            success: "Deleted Successfully!",
            error: "Error in Deleting Event.",
          },
          {
            position: "top-center",
          }
        );
      }
    });
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let description = prompt("Please enter a new description for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      const event = {
        id: uuidv4(),
        title: title,
        description: description,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };
      calendarApi.addEvent(event);
      toast.promise(
        dispatch(addEventToUser({ userId: id, event: event })),
        {
          loading: "loading...",
          success: "Successfully added the event",
          error: "Failed adding the event",
        },
        {
          position: "top-center",
        }
      );
    }
  }

  return (
    <FullCalendar
      locale={"en"}
      timeZone={"Asia/Kolkata"}
      firstDay={parseInt("1")}
      initialView={"listWeek"}
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin]}
      headerToolbar={{
        start: "prev,next today",
        center: "title",
        end: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
      }}
      navLinks={true} // can click day/week names to navigate views
      selectable={true}
      selectMirror={true}
      editable={true}
      dayMaxEvents={true}
      height={height}
      initialEvents={events}
      eventContent={renderEventContent}
      eventClick={handleEventClick}
      select={handleDateSelect}
    />
  );
};

function renderEventContent(eventInfo) {
  const event = eventInfo?.event?._def?.extendedProps;

  return (
    <div>
      <b>{FlConverter(eventInfo?.event?.title)}</b>
      <p>{FlConverter(event?.description)}</p>
    </div>
  );
}

export default Calender;
