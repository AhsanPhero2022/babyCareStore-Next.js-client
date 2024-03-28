import Image from "next/image";
import Link from "next/link";
import { TProduct } from "../../../components/type/type";
import { it } from "node:test";




const ProductsCollection = async () => {
  const products = await fetch(
    "https://baby-care-store-server.vercel.app/products",
    {
      cache: "no-cache",
    }
  );
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

              <div className="card-actions align-middle  item-center justify-between">
                <p className=" font-semibold">Price: {item.price}</p>
                <Link href={`/allProducts/${item._id}`}>
                  <button className="btn btn-neutral">See Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="my-12  text-center">
        <button className="btn">Load More</button>
      </div>
    </div>
  );
};

export default ProductsCollection;
