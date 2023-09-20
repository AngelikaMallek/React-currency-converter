import './App.css';
import Form from "./Form";
import {useState} from "react";

function App() {

  const [result, setResult] = useState();

  const calculateResult = ({ currency, amount }) => {
    console.log(currency);
    console.log(amount);
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
