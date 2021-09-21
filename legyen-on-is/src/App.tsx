import React from "react";
import "./app.css";

function App() {
  const piramis = [
    { id: 1, nyeremeny: "5000 Ft" },
    { id: 2, nyeremeny: "10000 Ft" },
    { id: 3, nyeremeny: "25000 Ft" },
    { id: 4, nyeremeny: "50000 Ft" },
    { id: 5, nyeremeny: "100000 Ft" },
    { id: 6, nyeremeny: "200000 Ft" },
    { id: 7, nyeremeny: "300000 Ft" },
    { id: 8, nyeremeny: "500000 Ft" },
    { id: 9, nyeremeny: "800000 Ft" },
    { id: 10, nyeremeny: "1500000 Ft" },
    { id: 11, nyeremeny: "3000000 Ft" },
    { id: 12, nyeremeny: "5000000 Ft" },
    { id: 13, nyeremeny: "10000000 Ft" },
    { id: 14, nyeremeny: "20000000 Ft" },
    { id: 15, nyeremeny: "40000000 Ft" },
  ].reverse();

  return (
    <div className="App">
      <div className="main">dfg</div>
      <div className="piramis">
        <ul className="nyeremeny__lista">
          {piramis.map((item) => (
            <li
              key={item.id}
              className="nyeremeny "
            >
              <span className="nyeremeny__sorszam">
                {item.id}
              </span>

              <span className="nyeremeny__osszeg">
                {item.nyeremeny}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
