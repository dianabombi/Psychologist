// Plugin for Full Calendar

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = ({ sessions }) => {
    const events = sessions.map(session => ({
        title: `Session with ${session.client}`,
        start: new Date(session.date),
        end: new Date(new Date(session.date).getTime() + session.duration * 60000), // Calculate the end time
    }));

    return <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />;
};

export default Calendar;
