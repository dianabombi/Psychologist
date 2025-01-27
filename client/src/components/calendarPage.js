import React, { useEffect, useState } from 'react';
import Calendar from './calendar';
import axios from 'axios';
import NavBar from './navBar';

const CalendarPage = () => {
    const [sessions, setSessions] = useState([]);

    useEffect(() => {
        const fetchSessions = async () => {
            try {
                const response = await axios.get('https://psychologist-w2pn.onrender.com/api/sessions');
                console.log(response);
                setSessions(response.data);
            } catch (error) {
                console.error('Error fetching sessions:', error);
            }
        };
        fetchSessions();
    }, []);
    

    return (
        <div>
            <NavBar />
            <div className='calendar-page'>
                <h1>Calendar of Sessions</h1>
                <Calendar sessions={sessions} />
            </div>
        </div>
    );
};

export default CalendarPage;
