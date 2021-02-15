import React from "react";
import "./Nav.css";
import requests from "./Requests";

function Nav({ setSelectedOption }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Legnépszerűbb
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTopRated)}>Kiemelt</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchActionMovies)}>
        Akció
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchComedyMovies)}>
        Vígjáték
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchRomanceMovies)}>
        Romantikus
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTrending)}>
        Misztikus
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchSciFi)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedOption(requests.fetchAnimation)}>
        Animációs
      </h2>
      <h2 onClick={() => setSelectedOption(requests.fetchTVshows)}>Sorozat</h2>
    </div>
  );
}

export default Nav;
