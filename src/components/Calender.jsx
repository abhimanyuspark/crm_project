import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/interaction"; // needed for dayClick
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";

const Calender = ({ height }) => {
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
      editable={false}
      dayMaxEvents={true}
      height={height}
    />
  );
};

export default Calender;
