import React from "react";
import useFetch from "./hooks/useFetch";
import "./App.css";

function App(): JSX.Element {
  const URL =
    "https://pokeapi.co/api/v2/pokemon/";

  const { loading, error, data } = useFetch(URL);

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="App">
      {data?.results?.map(
        (item: any, index: number) => {
          return (
            <div className="res">
              <p>{index}</p> &nbsp;
              <p>{item.name}</p>
            </div>
          );
        }
      )}
    </div>
  );
}
export default App;
