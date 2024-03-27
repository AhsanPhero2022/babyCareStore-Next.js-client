import { TProduct } from "@/components/type/type";
import Image from "next/image";
import { it } from "node:test";
import React from "react";

const ProductsCollection = async () => {
  const products = await fetch("http://localhost:5000/products", {
    cache: "no-cache",
  });
  const data = await products.json();
  return (
    <div className="my-12">
      <div className="grid lg:grid-cols-3 gap-3">
        {data?.map((item: TProduct) => (
          <div
            key={item._id}
            className="card card-compact w-auto bg-base-100 shadow-xl"
          >
            <figure>
              <Image
              className="w-full h-[250px]"
                width={300}
                height={300}
                src={item.image}
                alt="image loading..."
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">See Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCollection;
