"use client";

import Link from "next/link";

const CategoryBrand = () => {
  return (
    <div className="border px-16 py-12 border-1 my-12">
      <h2 className="text-2xl font-semibold">Category/Brand</h2>
      <div className="flex flex-col space-y-3 my-5">
        <button className="text-start">Baby Shoe</button>
        <button className="text-start">Baby Food</button>
        <button className="text-start">Baby Dress</button>
        <button className="text-start">Baby Traveling</button>
        <button className="text-start">Baby Car</button>
        <button className="text-start">Baby Diaper</button>
      </div>
    </div>
  );
};

export default CategoryBrand;
