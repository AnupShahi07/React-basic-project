import { useState, useEffect } from "react";
import "./home.css";
import Cry from "./cry";

const CURRENCIES = ["INR", "USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY"];

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rate, setRate] = useState(null);

  // Fetch exchange rate when currencies change using useEffect method.
  useEffect(() => {

    if (fromCurrency === toCurrency) {
      setRate(1); // No need to fetch if the currencies are the same
      return;
    }

    const fetchRate = async () => {
      const url = `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (data.rates && data.rates[toCurrency]) {
          setRate(data.rates[toCurrency]);
        } else {
          setRate(null);
        }
      } catch (err) {
        console.error("Fetch error:", err);
        setRate(null);
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  // Convert when amount or rate changes
  const convertedResult = rate ? (amount * rate).toFixed(2) : null;

  return (
    <div className="full">
      <div className="container">
        <h2 className="heading">💱 Currency Converter</h2>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input"
            placeholder="Enter Amount"
          />
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="select"
          >
            {CURRENCIES.map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>

          <span className="to-text">To</span>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="select"
          >
            {CURRENCIES.map(curr => <option key={curr} value={curr}>{curr}</option>)}
          </select>
        </div>

        <div className="result-area">
          {rate ? (
            <h3>{amount} {fromCurrency} = {convertedResult} {toCurrency}</h3>
          ) : (
            <p className="error">Please select different currencies to convert.</p>
          )}
        </div>
      </div>
      <Cry /> {/* this is coming from Cry.jsx*/}
    </div>
  );
}

export default CurrencyConverter;
