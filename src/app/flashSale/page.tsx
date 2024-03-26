import { TProduct } from "@/components/type/type";
import Image from "next/image";



const FlashSalePage = async() => {

    const products = await fetch("http://localhost:5000/products", {
       cache: 'no-cache'
      });
      const data = await products.json();

    return (
        <div className="my-12">
            <div>
                <h1 className='text-3xl font-bold my-8 '>Flash Sale</h1>
                <p className='my-8'>Here is all flash sale products available</p>
            </div>
            <div>
        {
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
        {data?.map((product:TProduct) => (
          <div className="card relative w-96 bg-base-100 shadow-xl" key={product._id}>
            <figure>
              <Image
                width={400}
                height={400}
                src={product.image}
                alt="Product"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions ">
                <p className="text-red-500 text-sm">Offer Time: {product.time_for_sorting}</p>
                <p className="absolute top-5 left-5 py-1 px-2 rounded-md  bg-gray-700 "><span className="text-red-500 text-sm">{product.discount}</span></p>
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

export default FlashSalePage;