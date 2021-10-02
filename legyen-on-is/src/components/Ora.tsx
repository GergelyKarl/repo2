import React, { useEffect, useState } from "react";

export default function Ora({
  setVisszaSzamlalo,
  kNumber,
}) {
  const [ido, setIdo] = useState(30);

  useEffect(() => {
    if (ido === 0) {
      return setVisszaSzamlalo(true);
    }
    let tictac = setInterval(() => {
      setIdo((mp) => mp - 1);
    }, 1000);

    return () => clearInterval(tictac);
  }, [ido, setVisszaSzamlalo]);

  useEffect(() => {
    setIdo(30);
  }, [kNumber]);

  return <div>{ido}</div>;
}
