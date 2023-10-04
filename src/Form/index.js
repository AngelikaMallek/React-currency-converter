import currencies from "../currencies"; 
import {useState} from "react";
import Result from "./Result";
import Clock from './Clock';
import { StyledForm, Fieldset, Legend, Field, Text, Button } from "./styled";

const Form = ({ calculateResult, result }) => {

    const [currency, setCurrency] = useState(currencies[0].name);
    
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return(
        <StyledForm onSubmit={onFormSubmit}>
            <Fieldset>
              <Legend>Kalkulator walut</Legend>
              <Clock />
              <p>
                  <Text>Podaj walutę, na którą chcesz przeliczyć:</Text>
                  <Field
                    as="select"
                    value={currency} 
                    onChange={({ target }) => {setCurrency(target.value)}}
                  >
                      {currencies.map(element => (
                        <option key={element.id}>
                            {element.name}
                        </option>
                      ))

                      }
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
            </Fieldset>
          <Button>Wyślij</Button>
            <Result 
              result={result}
            />
        </StyledForm>
    )
}

export default Form;
          