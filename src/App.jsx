import "./App.css";
import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  let handleAddToWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];
    localStorage.setItem("CineStack", JSON.stringify(newWatchList));
    setWatchlist(newWatchList);
    console.log(newWatchList);
  };

  let handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== movieObj.id;
    });
    localStorage.setItem("CineStack", JSON.stringify(filteredWatchlist));
    setWatchlist(filteredWatchlist);
    console.log(filteredWatchlist);
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("CineStack");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          t
          <Route
            path="/"
            element={
              <>
                <Banner />{" "}
                <Movies
                  watchlist={watchlist}
                  handleAddToWatchlist={handleAddToWatchlist}
                  handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/Watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                setWatchlist={setWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
