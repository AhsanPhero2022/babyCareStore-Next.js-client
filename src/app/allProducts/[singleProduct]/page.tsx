
import Image from "next/image";
import { TProduct } from "../../../components/type/type";
type Tid = {
    params?: {
      singleProduct: string;
    };
  };



const SingleProductPage = async ({ params }: Tid) => {
  const id = params?.singleProduct;
  const products = await fetch(
    "https://baby-care-store-server.vercel.app/products",
    {
      cache: "no-store",
    }
  );
  const data = await products.json();

  const product = data.find((product: TProduct) => product._id === id);

  if (!product) {
    return console.log(({ message: "Product not found" }));
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-12">
        Single product {product.name}{" "}
      </h2>
      <div className="lg:flex gap-4 bg-gray-200 p-12">
        <div className="flex  gap-4">
          <div className="gap-4 flex flex-col">
            <Image
              src={product.image}
              width={200}
              className="w-[200px] h-[200px]"
              height={200}
              alt="Loading..."
            />
            <Image
              src={product.image}
              width={200}
              className="w-[200px] h-[200px]"
              height={200}
              alt="Loading..."
            />
          </div>
          <div>
            <Image
              src={product.image}
              width={800}
              height={800}
              alt="Loading..."
            />
          </div>
        </div>
        <div className="space-y-5">
          <h2 className="text-3xl font-bold">Name: {product.name}</h2>
          <p>
            {product.price} USD | Ratings: {product.ratings}
          </p>
          <hr />
          <p>
            {product.description} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odio cupiditate corrupti ullam repellat harum.
            Nihil!
          </p>
          <p>
            <li>This is a best quality product in our shop</li>
            <li>You can choose a well product for your baby</li>
            <li>Our satisfied client is many</li>
          </p>
        </div>
      </div>
      <div>
        <p>
          <span className="text-3xl font-bold">Description:</span> Welcome to
          our baby care shop, where we prioritize the health and happiness of
          your little ones. Our extensive range of products is carefully curated
          to meet the diverse needs of both babies and parents. From gentle baby
          lotions to cozy clothing, nutritious food to safe travel essentials,
          ve got everything to nurture your s growth and development. With a
          focus on quality, safety, and affordability, we aim to make parenting
          a joyful journey. Explore our collection and discover the perfect
          solutions for your comfort, well-being, and everyday adventures. Your
          baby deserves the best, and here to provide it.
        </p>
        <ul className="space-y-3 my-12 p-2">
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            alias nisi veniam, quasi officiis soluta eaque explicabo! Adipisci,
            incidunt dolores.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            alias nisi veniam, quasi officiis soluta eaque explicabo! Adipisci,
            incidunt dolores.
          </li>
          <li>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            alias nisi veniam, quasi officiis soluta eaque explicabo! Adipisci,
            incidunt dolores.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleProductPage;
