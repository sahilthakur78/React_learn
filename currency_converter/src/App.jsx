import { useState } from "react";
import InputBox from "./components/Inputbox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css"
function App() {
  const [amount, setAmount] = useState("0");
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

return (
  <div
    className="app-bg"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')",
    }}
  >
    <div className="card">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
      >
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency) => setFrom(currency)}
          onAmountChange={(amount) => setAmount(amount)}
        />

        <div className="swap-container">
          <button type="button" onClick={swap} className="swap-btn">
            Swap
          </button>
        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          selectCurrency={to}
          onCurrencyChange={(currency) => setTo(currency)}
          amountDisable
        />

        <button type="submit" className="convert-btn">
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  </div>
)
}
export default App ;