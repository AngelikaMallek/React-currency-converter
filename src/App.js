import Form from "./Form";
import {useState} from "react";
import currencies from './currencies';
import { Text } from './styled';

function App() {

  const [result, setResult] = useState(null);

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
      <Text>* - pole wymagane </Text>
    </div>
  );
}

export default App;
