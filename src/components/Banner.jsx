import React from "react";

function Banner() {
  return (
    <div className="bg-black " >
      <div
        className="h-[60vh] md:w-[80vw] mx-auto bg-cover bg-center flex items-end"
        style={{
          backgroundImage:
            "url(https://images8.alphacoders.com/133/1337616.jpg)",
        }}
      >
        <div className="text-white text-2xl text-center font-bold w-full bg-black-700/40 p-4">
          Mission Impossible
        </div>
      </div>
    </div>
  );
}

export default Banner;
