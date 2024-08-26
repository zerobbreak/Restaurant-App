import React from "react";

const Card = ({ imageUrl, item }) => {
  return (
    <div className="container mx-auto md:py-12 lg:px-20 md:px-6 py-9 px-4">
      <div className="mt-10 max-w-sm mx-auto">
        <div className="relative group">
          <img
            src={imageUrl}
            alt="Photo by Sébastien Goldberg on Unsplash"
            className="w-full rounded shadow-xl hover:shadow-2xl"
          />
          <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
          <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 hover:opacity-100">
            <div className="flex-row text-center">
              <h1 className="text-gray-50 font-bold text-lg">{item.name}</h1>
              {item.single !== undefined && item.meal !== undefined ? (
                <>
                  <p className="text-white mt-2 mb-2">
                    <span className="font-semibold">Single:</span> R
                    {item.single}
                  </p>
                  <p className="text-white font-bold text-lg">
                    <span className="font-semibold">Meal:</span> R{item.meal}
                  </p>
                </>
              ) : (
                <p className="text-white font-bold text-lg">
                  <span className="font-semibold">Price:</span> R{item.price}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
