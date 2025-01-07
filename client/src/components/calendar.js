// Plugin for Full Calendar

import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const convertBookingToEvent = (booking) => {
  const startDate = new Date(booking.date);
  
  const timeParts = booking.time.split(' ');
  const timeComponents = timeParts[0].split(':');
  const hours = parseInt(timeComponents[0]);
  const minutes = parseInt(timeComponents[1]);
  
  let adjustedHours = hours;
  if (timeParts[1] === 'PM' && hours < 12) {
    adjustedHours += 12;
  } else if (timeParts[1] === 'AM' && hours === 12) {
    adjustedHours = 0;
  }

  startDate.setHours(adjustedHours);
  startDate.setMinutes(minutes);

  const endDate = new Date(startDate);
  endDate.setMinutes(startDate.getMinutes() + booking.duration);

  return {
    title: booking.name,
    start: startDate.toISOString(),
    end: endDate.toISOString(),
    description: `Email: ${booking.email}`,
  };
};

const Calendar = ({sessions}) => { 
  const events = sessions.map(convertBookingToEvent);

    return <FullCalendar 
        className="full-calendar"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
        initialView="dayGridMonth"
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
