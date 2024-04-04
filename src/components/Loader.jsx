import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex justify-center items-center z-50 bg-white opacity-75">
      <div className="loader"></div>
    </div>
  );
};

const ImageLoader = () => {
  return <div className="imageloader"></div>;
};

export { Loader, ImageLoader };
