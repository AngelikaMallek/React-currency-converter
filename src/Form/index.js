import "./style.css";
import currencies from "../currencies"; 
import {useState} from "react";
import Result from "./Result";
import Clock from './Clock';

const Form = ({ calculateResult, result }) => {

    const [currency, setCurrency] = useState(currencies[0].name);
    
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(currency, amount);
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Kalkulator walut</legend>
              <Clock />
              <p>
                  <span className="form__text">Podaj walutę, na którą chcesz przeliczyć:</span>
                  <select 
                    className="form__field" 
                    value={currency} 
                    onChange={({ target }) => {setCurrency(target.value)}}
                  >
                      {currencies.map(element => (
                        <option key={element.id}>
                            {element.name}
                        </option>
                      ))

                      }
                  </select>
              </p>
              <p>
                  <label>
                      <span className="form__text">Podaj ile pieniędzy chcesz wymienić:*</span>
                      <input 
                        className="form__field" 
                        name="quantity" 
                        type="number" 
                        value={amount} 
                        onChange={({ target }) => {setAmount(target.value)}}
                        required 
                      />
                  </label>
              </p>
            </fieldset>
          <button className="form__button">Wyślij</button>
            <Result 
              result={result}
            />
        </form>
    )
}

export default Form;
          