const Result = ({ result }) => {
    return(
        <span className="form__result">
            {!!result && (
                <>
                    {result.formAmount}&nbsp;PLN&nbsp;=
                    {" "}
                    {result.formResult.toFixed(2)}&nbsp;
                    {result.formCurrency}
                </>
            )}
          </span>
    )
}

export default Result;