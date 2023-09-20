import './App.css';

function App() {
  return (
    <div>
       <form class="form js-form">
        <fieldset class="form__fieldset">
            <legend class="form__legend">Kalkulator walut</legend>
            <p>
                <span class="form__text">Podaj walutę, na którą chcesz przeliczyć:</span>
                <select class="form__field js-currency" name="currency">
                    <option>EUR</option>
                    <option>USD</option>
                    <option>GBP</option>
                </select>
            </p>
            <p>
                <label>
                    <span class="form__text">Podaj ile pieniędzy chcesz wymienić:*</span>
                    <input name="quantity" class="form__field js-quantity" type="number" required />
                </label>
            </p>
        </fieldset>
        <button class="form__button">Wyślij</button>
        <span class="form__result js-result"></span>
    </form>
    <span class="importantText">* - pole wymagane </span>
    </div>
  );
}

export default App;
