import { TProduct } from "@/components/type/type";


const SingleProductPage = async ({params}) => {
    const id = params.singleProduct
    const products = await fetch("https://baby-care-store-server.vercel.app/products", {
        cache: 'no-store',
      });
      const data = await products.json()

   console.log(data, "data");


const product = data.find((product: TProduct) => product._id === id);


if (!product) {
    return alert({ message: 'Product not found' });
  }


    return (
        <div>
            <h2>This is single product {params.singleProduct} </h2>
        </div>
    );
};

export default SingleProductPage;