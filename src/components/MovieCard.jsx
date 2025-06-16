import React from "react";

function MovieCard({
  movieObj,
  poster_path,
  name,
  handleAddToWatchlist,
  handleRemoveFromWatchlist,
  watchlist,
}) {

  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  const fallbackImage = "https://placehold.co/200x300?text=No+Image";
  return (
    <div
      className="overflow-hidden h-[40vh] w-[200px] bg-center bg-cover rounded-md hover:scale-105 duration-300 hover:cursor-pointer mb-10 flex direction-col items-end relative"
      style={{
        backgroundImage:
          `url(https://image.tmdb.org/t/p/original/${poster_path})` ||
          fallbackImage,
      }}
    >
      {doesContain(movieObj) ? (
        <div
        onClick={() => handleRemoveFromWatchlist(movieObj)}
        className=" h-8 w-8 bg-white text-black absolute top-0 right-0 flex justify-center items-center rounded-md"
      >
        <i class="fa-solid fa-heart" style={{ color: "#b43300" }}></i>
      </div>
      ) : (
        <div
          onClick={() => handleAddToWatchlist(movieObj)}
          className=" h-8 w-8 bg-white text-black absolute top-0 right-0 flex justify-center items-center rounded-md"
        >
          <i class="fa-regular fa-heart" style={{ color: "#b43300" }}></i>
        </div>
      )}

      <div className="bg-seal-brown-600 text-white text-xs font-bold w-full p-3 text-center rounded-b-md">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
