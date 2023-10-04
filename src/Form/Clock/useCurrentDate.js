import { useState, useEffect } from 'react';

const useCurrentDate = () => {
    const [myDate, setMyDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setMyDate(new Date())
        }, 1000)

        return () => {
            clearInterval(interval);
        }

    }, [])

    return myDate;
}

export default useCurrentDate;