import { useState, useEffect } from "react";
import "./home.css";
import Cry from "./Cry.jsx";

const CURRENCIES = [
  "INR",
  "USD",
  "EUR",
  "GBP",
  "JPY",
  "AUD",
  "CAD",
  "CNY",
];

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [rate, setRate] = useState(null);

  useEffect(() => {
    if (fromCurrency === toCurrency) {
      setRate(1);
      return;
    }

    const fetchRate = async () => {
      try {
        const res = await fetch(
          `https://open.er-api.com/v6/latest/${fromCurrency}`
        );

        if (!res.ok) {
          throw new Error("Failed to fetch exchange rates");
        }

        const data = await res.json();

        if (data.result === "success" && data.rates[toCurrency]) {
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

  const convertedResult =
    rate !== null ? (Number(amount) * rate).toFixed(2) : null;

  return (
    <div className="full">
      <div className="container">
        <h2 className="heading">💱 Currency Converter</h2>

        <div className="converter-row">
          <input
            type="number"
            min="0"
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
            {CURRENCIES.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>

          <span className="to-text">To</span>

          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="select"
          >
            {CURRENCIES.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
        </div>

        <div className="result-area">
          {rate !== null ? (
            <h3>
              {amount} {fromCurrency} = {convertedResult} {toCurrency}
            </h3>
          ) : (
            <p className="error">
              Unable to fetch exchange rate. Please try again later.
            </p>
          )}
        </div>
      </div>

      <Cry />
    </div>
  );
}

export default CurrencyConverter;