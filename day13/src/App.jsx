import { useState } from "react";
const CurrencyInput = ({ currencyMethod, value, onChange }) => {
  return (
    <div>
      {currencyMethod}:
      <input
        type="number"
        value={value}
        onChange={(e) => {
          onChange(currencyMethod, e.target.value);
        }}
      />
    </div>
  );
};

const EXCAHNGE_RATE = 1300;

function App() {
  const [currency, setCurrency] = useState({
    krw: 0,
    usd: 0,
  });

  const onChangeCurrency = (currencyMethod, value) => {
    console.log(currencyMethod, value);
    if (currencyMethod === "krw") {
      setCurrency({ krw: value, usd: value / EXCAHNGE_RATE });
    } else if (currencyMethod === "usd") {
      setCurrency({ krw: value * EXCAHNGE_RATE, usd: value });
    }
  };

  return (
    <>
      <h1>환율 변환기 (KRW-USD)</h1>
      <h2>환율 : {EXCAHNGE_RATE}</h2>
      <CurrencyInput
        currencyMethod={"krw"}
        value={currency.krw}
        onChange={onChangeCurrency}
      />
      <CurrencyInput
        currencyMethod={"usd"}
        value={currency.usd}
        onChange={onChangeCurrency}
      />
    </>
  );
}

export default App;
