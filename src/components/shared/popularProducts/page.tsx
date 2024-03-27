
import Image from "next/image";
import { TProduct } from "../../type/type";

const PopularProductsPage = async () => {
  const products = await fetch(
    "https://baby-care-store-server.vercel.app/products",
    {
      cache: "no-cache",
    }
  );
  const data = await products.json();

  return (
    <div className="my-12">
      <div className="flex justify-between items-center my-8">
        <div className="">
          <h1 className="text-3xl font-bold ">Most Popular Products</h1>
          <p>
            Excellence in every aspect of baby care. nourishing feeding
            solutions.
          </p>
        </div>
        <button className="btn bg-gray-700 text-white">View All</button>
      </div>
      <div>
        {
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {data?.slice(0, 8).map((product: TProduct) => (
              <div
                className="card relative w-auto bg-base-100 shadow-xl"
                key={product._id}
              >
                <figure>
                  <Image
                    width={200}
                    height={200}
                    className="w-full h-[250px]"
                    src={product.image}
                    alt="Product"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="card-actions ">
                    <p className="text-red-500 text-sm">
                      Offer Time: {product.time_for_sorting}
                    </p>
                    <p className="absolute top-5 left-5 py-1 px-2 rounded-md  bg-gray-700 ">
                      <span className="text-red-500 text-sm">
                        {product.discount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
};

export default PopularProductsPage;
