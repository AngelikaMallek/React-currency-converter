import { useState, useEffect } from 'react';
import { StyledClock, Content } from './styled';

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
        <StyledClock>
            <Content>
                Dzisiaj jest 
                {" "}
                {formattedTime}
            </Content>
        </StyledClock>
    )
}

export default Clock;
