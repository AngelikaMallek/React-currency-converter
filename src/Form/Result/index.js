import { StyledResult } from "./styled";

const Result = ({ result }) => {
    return(
        <StyledResult>
            {!!result && (
                <>
                    {result.formAmount}&nbsp;PLN&nbsp;=
                    {" "}
                    {result.formResult.toFixed(2)}&nbsp;
                    {result.formCurrency}
                </>
            )}
          </StyledResult>
    )
}

export default Result;