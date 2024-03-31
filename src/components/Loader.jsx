import React from "react";

const Loader = () => {
  return (
    <div class="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-50 bg-white opacity-75">
      <div class="w-10 h-10 mx-auto loader ease-linear rounded-full border-4 border-gray-800"></div>
    </div>
  );
};

export default Loader;
