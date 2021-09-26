import React, {
  useState,
  useEffect,
} from "react";

export default function Kerdesek({
  kerdesekTomb,
  visszaSzamalalo,
  kNumber,
  setKNumber,
}) {
  const [kerdesek, setKerdesek] = useState(null);

  useEffect(() => {
    setKerdesek(kerdesekTomb[kNumber - 1]);
  }, [kerdesekTomb, kerdesek, kNumber]);

  return (
    <div className="kerdesek">
      <div className="kerdes">
        {kerdesek?.kerdes}
      </div>
      <div className="valaszok">
        {kerdesek?.valasz.map((valasz) => (
          <div className="valasz">
            {valasz?.szoveg}
          </div>
        ))}
      </div>
    </div>
  );
}
