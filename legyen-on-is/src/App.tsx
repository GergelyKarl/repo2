import React, {
  useState,
  useEffect,
  useMemo,
} from "react";
import "./app.css";
import Kerdesek from "./components/Kerdesek";

function App() {
  const [kNumber, setKNumber] = useState(1);
  const [visszaSzamlalo, setVisszaSzamlalo] =
    useState(false);
  const [nyertOsszeg, setNyertOsszeg] =
    useState("");
  const kerdesekTomb = [
    {
      id: 1,
      kerdes:
        "Mikor volt az 1848-as szabadságharc",
      valasz: [
        { szoveg: "1849", helyes: false },
        { szoveg: "1847", helyes: false },
        { szoveg: "1848", helyes: true },
        { szoveg: "1850", helyes: false },
      ],
    },
    {
      id: 2,
      kerdes: "Mikor fedezték fel Amerikát?",
      valasz: [
        { szoveg: "1492", helyes: true },
        { szoveg: "1482", helyes: false },
        { szoveg: "1452", helyes: false },
        { szoveg: "1472", helyes: false },
      ],
    },
  ];
  const piramis = useMemo(
    () =>
      [
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
      ].reverse(),

    []
  );

  useEffect(() => {
    kNumber > 1 &&
      setNyertOsszeg(
        piramis.find(
          (nyer: any) => nyer.id === kNumber-1
        ).nyeremeny
      );
  }, [kNumber, piramis]);

  return (
    <div className="App">
      <div className="main">
        {visszaSzamlalo ? (
          <h1>Nyertél:{nyertOsszeg}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer">30</div>
            </div>
            <div className="bottom">
              <Kerdesek
                kerdesekTomb={kerdesekTomb}
                visszaSzamalalo={
                  setVisszaSzamlalo
                }
                kNumber={kNumber}
                setKNumber={setKNumber}
                setVisszaSzamlalo={
                  setVisszaSzamlalo
                }
              />
            </div>
          </>
        )}
      </div>
      <div className="piramis">
        <ul className="nyeremeny__lista">
          {piramis.map((item) => (
            <li
              key={item.id}
              className={
                item.id === kNumber
                  ? "nyeremeny active"
                  : "nyeremeny"
              }
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
