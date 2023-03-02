import React from 'react';

const TrailComponent = ({ trailImage, trailName, trailDescription, trailLength, trailLocation }) => {
  return (
    <div className="flex justify-center gap-6 flex-col my-6 md:flex-row lg:flex-row p-2">
      <div>
        <img
          src={trailImage}
          alt="Naked Man Beach Trail"
          className="max-w-sm mx-auto"
        />
      </div>
      <div className="mx-auto md:mx-0 lg:mx-0 bg-white p-6 rounded-lg border-2 border-gray-300 max-w-md">
        <h2 className="text-3xl font-bold mb-2">{trailName}</h2>
        <p className="mb-2">{trailDescription}</p>
        <p className="mb-2"><span className="font-bold">Length: </span>{trailLength}</p>
        <p><span className="font-bold">Location: </span>{trailLocation}</p>
      </div>
    </div>
  );
};

export default TrailComponent