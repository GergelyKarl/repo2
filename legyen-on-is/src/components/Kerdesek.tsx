import React, { useState, useEffect } from "react";

export default function Kerdesek({
  kerdesekTomb,
  visszaSzamalalo,
  kNumber,
  setKNumber,
  setVisszaSzamlalo,
}) {
  const [kerdesek, setKerdesek] = useState(null);
  const [kivalasztott, setKivalasztott] = useState(null);
  const [className, setClassName] = useState("valasz");

  useEffect(() => {
    setKerdesek(kerdesekTomb[kNumber - 1]);
  }, [kerdesekTomb, kerdesek, kNumber]);

  const delay = (timeout, callback) => {
    setTimeout(() => callback(), timeout);
  };

  const handleClick = (valasz) => {
    setKivalasztott(valasz);
    setClassName("valasz active");
    delay(1000, () =>
      setClassName(
        valasz.helyes ? "valasz helyes" : "valasz helytelen"
      )
    );

    delay(3000, () => {
      if (valasz.helyes) {
        setKNumber((number) => number + 1);
      } else {
        setVisszaSzamlalo(true);
        setKivalasztott(null);
      }
    });
  };

  return (
    <div className="kerdesek">
      <div className="kerdes">{kerdesek?.kerdes}</div>
      <div className="valaszok">
        {kerdesek?.valasz.map((valasz) => (
          <div
            className={
              kivalasztott === valasz ? className : "valasz"
            }
            onClick={() => handleClick(valasz)}
          >
            {valasz?.szoveg}
          </div>
        ))}
      </div>
    </div>
  );
}
