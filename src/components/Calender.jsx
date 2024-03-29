import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import { FlConverter } from "../utilities";
import { useDispatch } from "react-redux";
import { deleteUserEvent } from "../redux/server/server";

const Calender = ({ height, events, id }) => {
  const dispatch = useDispatch();

  function handleEventClick(clickInfo) {
    const eventId = clickInfo.event.id;

    if (
      confirm(
        `Are you sure you want to delete the event : ${clickInfo?.event?.title}`
      )
    ) {
      dispatch(deleteUserEvent({ userId: id, eventId: eventId }));
      clickInfo.event.remove();
    }
  }

  function handleDateSelect(selectInfo) {
    let title = prompt("Please enter a new title for your event");
    let description = prompt("Please enter a new description for your event");
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        title: title,
        description: description,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
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
