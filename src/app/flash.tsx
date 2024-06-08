import Image from "next/image";
import Link from "next/link";
import { TProduct } from "../components/type/type";
import CountDown from "../components/CountDown/CountDown";

const FlashPage = async () => {
  const products = await fetch(
    "https://baby-care-store-server.vercel.app/products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const data = await products.json();

  data.sort((a: TProduct, b: TProduct) => {
    return (
      new Date(a.time_for_sorting).getTime() -
      new Date(b.time_for_sorting).getTime()
    );
  });

  return (
    <div className="my-12">
      <div className="flex my-8 justify-between items-center text-3xl font-semibold">
        <div>
          <h1>Flash Sale</h1>
        </div>
        <div className="">
          <p className="text-sm text-red-500">Offer end in: </p>
          <CountDown />
        </div>
        <div>
          <Link href="/flashSale">
            <button className="btn btn-neutral text-white ">View all</button>
          </Link>
        </div>
      </div>
      <div>
        {
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-auto">
            {data?.slice(0, 6).map((product: TProduct) => (
              <div
                className="card relative w-auto bg-base-100 shadow-xl"
                key={product._id}
              >
                <figure>
                  <Image
                    width={500}
                    height={400}
                    src={product.image}
                    alt="Product"
                    className="w-full h-[250px]"
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

export default FlashPage;
