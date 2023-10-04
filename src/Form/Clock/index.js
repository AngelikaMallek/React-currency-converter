import { StyledClock, Content } from './styled';
import useCurrentDate from './useCurrentDate';

const Clock = () => {
    
    const myDate = useCurrentDate();

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
