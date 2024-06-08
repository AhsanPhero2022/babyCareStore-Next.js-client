import React from "react";

const Ratings = () => {
  return (
    <div className="border px-16 py-12 border-1 my-12">
      <h2 className="text-2xl font-semibold mb-8">Ratings</h2>
      <div className="space-y-5">
        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />1 star
        </p>
        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />2 star
        </p>
        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />3 star
        </p>
        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />4 star
        </p>
        <p className="flex gap-5">
          <input type="checkbox" className="checkbox checkbox-primary" />5 star
        </p>
      </div>
    </div>
  );
};

export default Ratings;
