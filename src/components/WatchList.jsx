import React, { useState, useEffect } from "react";
import genreids from "../assets/Genre";

function WatchList({ watchlist, handleRemoveFromWatchlist, setWatchlist }) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedInc = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortedInc]);
  };

  let sortDecreasing = () => {
    let sortedDec = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDec]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <div className="bg-black  h-[100vh]">
    <div className=" w-[80vw] mx-auto">
      <div className="flex justify-center flex-wrap">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center text-white font-bold bg-seal-brown-600/90 p-3 rounded-xl mr-2 mb-2"
                  : "flex justify-center text-white font-bold bg-seal-brown-600/70 p-3 rounded-xl mr-2 mb-2"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-5">
        <input
          onChange={handleSearch}
          value={search}
          className="bg-seal-brown-600/90 text-white h-[3rem] w-[25rem] rounded-md border-none outline-none px-5"
          type="text"
          placeholder="Search for Movies..."
        />
      </div>

      <div className="rounded-md overflow-hidden border border-white-200 m-5 p-5">
        <table className="w-full text-seal-brown-600 text-center">
          <thead className="">
            <tr className="h-10">
              <th>Name</th>
              <div className="mt-1 flex justify-center items-end">
                <div
                  onClick={sortIncreasing}
                  className="w-6 h-6 bg-black rounded-xl"
                >
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <th>Ratings</th>
                <div
                  onClick={sortDecreasing}
                  className="w-6 h-6 bg-black rounded-xl"
                >
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </div>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre === "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border b-2">
                    <td className="flex items-center p-3">
                      <img
                        className="h-[5rem] w-[5rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      ></img>
                      <div className="mx-10 font-bold">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-red font-bold"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default WatchList;
