import './App.css';
import Form from "./Form";
import {useState} from "react";
import currencies from './currencies';

function App() {

  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const value = currencies.find(({ name }) => name === currency).value;
    const shortName = currencies.find(({ name }) => name === currency).shortName;
    
    setResult({
      formAmount: +amount,
      formResult: amount / value,
      formCurrency: shortName, 
    });
    
  }

  return (
    <div>
      <Form 
        calculateResult={calculateResult}   
        result={result}   
      />
      <span className="importantText">* - pole wymagane </span>
    </div>
  );
}

export default App;
