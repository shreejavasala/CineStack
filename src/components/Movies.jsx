import React, { useEffect, useState } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";
// import WatchList from "./WatchList";

function Movies({handleAddToWatchlist, handleRemoveFromWatchlist, watchlist}) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1)
  const apiKey = import.meta.env.VITE_API_KEY;

  const handlePrev = () => {
    if(pageNo === 1) {
      setPageNo(pageNo)
    }else {
      setPageNo(pageNo => pageNo - 1);
    }
    
  }

  const handleNext = () => {
    setPageNo(pageNo => pageNo + 1)
  }


  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
      )
      .then(function(res) {
        console.log(res.data.results);
        setMovies(res.data.results);
      });
  }, [pageNo, apiKey]);

  return (
    <div className="pt-4 mx-auto bg-black">
      <div className="text-white text-2xl text-center font-bold bg-seal-brown-600 w-[80vw] mx-auto h-12 p-2 mb-10">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around items-center w-[80vw] mx-auto">
        {movies.map((movieObj)=> {
          return <MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} name={movieObj.title} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist} watchlist={watchlist}/>
        })}
      </div>

      <Pagination pageNo={pageNo} handlePrev={handlePrev} handleNext={handleNext}/>
    </div>
  );
}

export default Movies;
