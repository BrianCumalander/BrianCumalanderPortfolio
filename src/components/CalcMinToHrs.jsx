// this will be the actual calculator


import { useState, useEffect } from "react";
import "./App.css";

const HISTORY_KEY = "minutesToHoursHistory";
const MAX_HISTORY = 5;

export default function App() {
  const [minutes, setMinutes] = useState("");
  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(
        sessionStorage.getItem(HISTORY_KEY) || "[]"
      );
    } catch {
      return [];
    }
  });
  const [error, setError] = useState("");

  useEffect(() => {
    sessionStorage.setItem(
      HISTORY_KEY,
      JSON.stringify(history)
    );
  }, [history]);

  function convertMinutes(event) {
    event.preventDefault();

    const value = minutes.trim() === "" ? NaN : Number(minutes);

    if (!Number.isFinite(value) || value < 0) {
      setError("Enter a valid, non-negative number of minutes.");
      return;
    }

    const totalHours = value / 60;
    const wholeHours = Math.floor(value / 60);
    const remainingMinutes = value % 60;

    const conversion = {
      id: `${Date.now()}-${Math.random()}`,
      minutes: value,
      hours: Number(totalHours.toFixed(4)),
      formatted: `${wholeHours} hr ${
        remainingMinutes === 0
          ? "0 min"
          : `${Number(remainingMinutes.toFixed(4))} min`
      }`,
      time: new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
      }),
    };

    setHistory((previous) =>
      [conversion, ...previous].slice(0, MAX_HISTORY)
    );

    setError("");
  }

  function clearHistory() {
    setHistory([]);
    sessionStorage.removeItem(HISTORY_KEY);
  }

  return (
    <main className="app">
      <section className="converter">
        <h1>Minutes to Hours</h1>
        <p className="subtitle">
          Convert minutes into hours in seconds.
        </p>

        <form onSubmit={convertMinutes}>
          <label htmlFor="minutes">Minutes</label>

          <input
            id="minutes"
            type="number"
            min="0"
            step="any"
            placeholder="Enter minutes"
            value={minutes}
            onChange={(event) => setMinutes(event.target.value)}
            autoFocus
          />

          <button type="submit">Convert</button>

          {error && <p className="error">{error}</p>}
        </form>

        {history.length > 0 && (
          <section className="history">
            <div className="history-header">
              <h2>Recent Conversions</h2>
              <button
                type="button"
                className="clear-button"
                onClick={clearHistory}
              >
                Clear
              </button>
            </div>

            <ul>
              {history.map((item) => (
                <li key={item.id} className="history-item">
                  <div>
                    <strong>
                      {item.minutes.toLocaleString()} minutes
                    </strong>
                    <span className="conversion-detail">
                      {item.formatted}
                    </span>
                  </div>

                  <div className="result">
                    <strong>{item.hours} hours</strong>
                    <span className="timestamp">{item.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {history.length === 0 && (
          <p className="empty-history">
            Your recent conversions will appear here.
          </p>
        )}

        <p className="footer">
          Showing up to {MAX_HISTORY} recent conversions.
        </p>
      </section>
    </main>
  );
}

 
 export default CalcMinToHrs
 