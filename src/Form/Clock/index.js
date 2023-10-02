import { StyledClock, Content } from './styled';
import useCurrentDate from './useCurrentDate';

const Clock = () => {
    
    const formattedTime = useCurrentDate();

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
