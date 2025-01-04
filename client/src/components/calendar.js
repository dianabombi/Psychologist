// Plugin for Full Calendar

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';


const Calendar = ({ sessions }) => {
    const events = sessions.map(session => ({
        title: `Session with ${session.client}`,
        start: new Date(session.date),
        end: new Date(new Date(session.date).getTime() + session.duration * 60000), // Calculate the end time
    }));

    return <FullCalendar 
        className="full-calendar"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
        initialView={"dayGridMonth"} 
        events={events} 
        headerToolbar={{
            start: 'today prev,next', 
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay' 
          }}
          height={"90vh"}
          />;
};

export default Calendar;
