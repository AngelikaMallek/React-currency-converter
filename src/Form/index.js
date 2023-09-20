import "./style.css";
import {useState} from "react";

const Form = () => {

    const currencies = [
        {
            id: 1,
            name: "Euro",
            shortName: "EUR",
            value: 4.69,
        },
        {
            id: 2,
            name: "Dolar amerykański",
            shortName: "USD",
            value: 4.30,
        },
        {
            id: 3,
            name: "Funt brytyjski",
            shortName: "GBP",
            value: 5.25,
        }
    ];

    const [currency, setCurrency] = useState("");
    
    const [amount, setAmount] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
    }

    return(
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
              <legend className="form__legend">Kalkulator walut</legend>
              <p>
                  <span className="form__text">Podaj walutę, na którą chcesz przeliczyć:</span>
                  <select 
                    className="form__field" 
                    value={currency} 
                    onChange={({ target }) => {setCurrency(target.value)}}
                  >
                      {currencies.map(currency => (
                        <option key={currency.id}>
                            {currency.name}
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
          <span className="form__result"></span>
        </form>
    )
}

export default Form;
          