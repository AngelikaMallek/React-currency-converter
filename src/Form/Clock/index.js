import './style.css';
import { useState, useEffect } from 'react';

const Clock = () => {
    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setMyDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval);
        }

    }, [])

    const formattedTime = myDate.toLocaleDateString(
        undefined,
        { 
            month: "long", 
            weekday: "long", 
            day: "numeric", 
            hour: "numeric", 
            minute: "numeric", 
            second: "numeric"
        },
    )

    return (
        <div className="clock">
            <p className="clock__content">
                Dzisiaj jest 
                {" "}
                {formattedTime}
            </p>
        </div>
    )
}

export default Clock;
