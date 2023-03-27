import { useState } from "react";
import { Block } from "./components/Block";
import rates from "./rates.json";

function App() {
  const [enterRate, setEnterRate] = useState<number>(0);
  const [enterCurrency, setEnterCurrency] = useState("RUB");

  const [exitRate, setExitRate] = useState<number>(0);
  const [exitCurrency, setExitCurrency] = useState("USD");
  const onChangeFromPrice = (value: number) => {
    setEnterRate(value);
    //@ts-ignore
    const newExitRate = (rates[exitCurrency] / rates[enterCurrency]) * value;
    setExitRate((prev) => (prev = newExitRate));
  };
  const onChangeToPrice = (value: number) => {
    setExitRate(value);
    //@ts-ignore
    const price = (rates[enterCurrency] / rates[exitCurrency]) * value;
    setEnterRate((prev) => (prev = price));
  };
  return (
    <div className='App'>
      <Block
        value={enterRate}
        currency={enterCurrency}
        onChangeValue={onChangeFromPrice}
        onChangeCurrency={setEnterCurrency}
      />
      <Block
        value={exitRate}
        currency={exitCurrency}
        onChangeValue={onChangeToPrice}
        onChangeCurrency={setExitCurrency}
      />
    </div>
  );
}

export default App;
