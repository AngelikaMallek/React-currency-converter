import {useEffect, useState} from "react";
import Result from "./Result";
import Clock from './Clock';
import { StyledForm, Fieldset, Legend, Field, Text, Button, Loading, Error, StyledDate } from "./styled";
import { useRatesData } from "./useRatesData";

const Form = () => {

    const ratesData = useRatesData();

    const [result, setResult] = useState(null);

    const [currency, setCurrency] = useState("EUR");
    
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
      event.preventDefault();
      calculateResult(currency, amount);
    }

    const calculateResult = (currency, amount) => {

      const value = ratesData.data[currency].value;
      
      setResult({
        formAmount: +amount,
        formResult: amount * value,
        formCurrency: currency, 
      });
  
    }

    const [myDate, setMyDate] = useState(new Date(ratesData.meta));

    const formattedTime = myDate.toLocaleDateString(
      undefined,
      { 
          month: "2-digit",
          day: "2-digit", 
          year: "numeric",
      },
    )

    return(
        <StyledForm onSubmit={onFormSubmit}>
          <Fieldset>
            <Legend>
              Kalkulator walut
            </Legend>
            <Clock />

            {ratesData.status === "loading" ? (
              <Loading>
                Sekundka... <br /> Ładuję kursy walut z Europejskiego Banku Centralnego
              </Loading>
            ) 

            : ratesData.status === "error" ? (
                <Error>
                  Hmm.... Coś poszło nie tak. Sprawdź, czy masz połączenie z internetem
                </Error>
            )

            : (
              <>
                <p>
                  <Text>
                    Podaj walutę, na którą chcesz przeliczyć:
                  </Text>
                  <Field
                    as="select"
                    value={currency} 
                    onChange={({ target }) => {setCurrency(target.value)}}
                  >
                    {Object.keys(ratesData.data).map(((currency) => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}
                      </option>
                    )))}
                  </Field>
                </p>
                <p>
                  <label>
                    <Text>Podaj ile pieniędzy chcesz wymienić:*</Text>
                    <Field
                      name="quantity" 
                      type="number" 
                      value={amount} 
                      onChange={({ target }) => {setAmount(target.value)}}
                      required 
                    />
                  </label>
                </p>
                <Button>
                  Wyślij
                </Button>
                <Result 
                  result={result}
                />
                <StyledDate>
                  Kursy walut pobierane są z Europejskiego Banku Centralnego. 
                  <br />Aktualne na dzień: <b>{formattedTime}</b>
                </StyledDate>
              </>
            )}
          </Fieldset>
        </StyledForm>
    )
}

export default Form;
          