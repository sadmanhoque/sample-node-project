import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

function TimeZoneClock({ timeZone }) {
    const [currentTime, setCurrentTime] = useState(moment().tz(timeZone).format('HH:mm:ss'));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().tz(timeZone).format('HH:mm:ss'));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [timeZone]);

    return (
        <div>
            <h2>Time in EST</h2>
            <p>{currentTime}</p>
        </div>
    );
}

export default TimeZoneClock;
