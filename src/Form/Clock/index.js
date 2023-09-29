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

    return (
        <div className="clock">
            <p className="clock__content">
                Dzisiaj jest 
                {" "}
                {myDate.toLocaleDateString(
                    undefined,
                    { 
                        month: "long", 
                        weekday: "long", 
                        day: "numeric", 
                        hour: "numeric", 
                        minute: "numeric", 
                        second: "numeric"
                    },
                )}
            </p>
        </div>
    )
}

export default Clock;
