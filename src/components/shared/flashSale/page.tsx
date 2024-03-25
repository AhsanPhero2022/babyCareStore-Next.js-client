import { TProduct } from "@/components/type/type";
import Image from "next/image";


const FlashSalePage = async () => {

const products = await fetch("http://localhost:5000/products", {
  next: {
    revalidate: 30,
  }
});
const data = await products.json();

data.sort((a:TProduct, b:TProduct)  => {
  return new Date(a.time_for_sorting).getTime() - new Date(b.time_for_sorting).getTime();
});

  return (
    <div>
      <div className="flex justify-between items-center text-3xl font-semibold">
        <div>
          <h1>Flash Sale</h1>
        
        </div>
        <div>
          <button className="btn bnt-ghost">
          View all
          </button>
        </div>
      </div>
      <div>
        {
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        {data?.slice(0, 6).map((product:TProduct) => (
          <div className="card w-96 bg-base-100 shadow-xl" key={product._id}>
            <figure>
              <Image
                width={200}
                height={200}
                src={product.image}
                alt="Product"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="card-actions ">
                <p className="text-red-500 text-sm">Offer Time: {product.time_for_sorting}</p>
                <p className="">Discount:  <span className="text-red-500 text-sm">{product.discount}</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      }
      </div>
    </div>
  )
}

export default FlashSalePage