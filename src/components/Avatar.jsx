import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import { ImageLoader } from "./index";

const Avatar = ({ value = "", onChange }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div
      className="relative w-36 h-36 border border-slate-300 flex items-center justify-center rounded-md cursor-pointer overflow-hidden"
      onClick={() => {
        setLoading(true);
        const time = setTimeout(() => {
          const profile = faker.image.avatar();
          onChange(profile);
          setLoading(false);
        }, 500);
        return () => clearTimeout(time);
      }}
    >
      {loading ? (
        <ImageLoader />
      ) : value ? (
        <div className="group/show relative w-full h-full">
          <div className="group-hover/show:visible group-hover/show:bg-[rgba(0,0,0,0.5)] invisible absolute z-10 w-full h-full p-2 flex justify-end items-start">
            <button
              type="button"
              className="border border-white p-2 text-sm bg bg-[rgba(0,0,0,0.8)] text-white"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
              }}
            >
              Remove
            </button>
          </div>
          <img
            src={value}
            alt="Avatar"
            onLoadStart={() => setLoading(false)}
            onLoad={() => setLoading(false)}
            className="w-full h-full rounded-sm p-2 object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center hover:bg-[rgba(0,0,0,0.3)] hover:text-white">
          <span className="text-sm p-2 rounded-md border border-dashed border-slate-300">
            select image
          </span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
