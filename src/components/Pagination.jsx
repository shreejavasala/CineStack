import React from "react";

function Pagination({pageNo, handlePrev, handleNext}) {
  return (
    <div className="bg-seal-brown-600 p-4 mt-10 flex justify-center">
      <div onClick={handlePrev}className="px-8 text-xl hover:cursor-pointer hover:scale-110"><i className="fa-solid fa-backward"></i></div>
      <div className="text-xl font-bold">{pageNo}</div>
      <div onClick={handleNext}className="px-8 text-xl hover:cursor-pointer hover:scale-110"><i className="fa-solid fa-forward"></i></div>
    </div>
  );
}

export default Pagination;
