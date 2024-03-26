import Image from "next/image";

const BrandPage = () => {
  return (
    <div>
      <div className="text-center my-8">
        <hr className="my-5 shadow-xl" />
        <h1 className="text-3xl font-bold ">Brands Categories</h1>
        <p className="w-1/2 mx-auto">
          Discover a world of baby care essentials categorized for your
          convenience. Explore cozy clothing options, gentle bathing
          necessities, nourishing feeding solutions, and reliable safety
          products.
        </p>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="row-span-2 col-span-4 w-full mx-auto">
          <Image
            width={800}
            height={800}
            className="rounded-md  "
            alt="Image Loading..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfa0mCSlWCfcQl6WWqmZI-iIszO0d2ARTPrykxREKyw&s"
          />
        </div>
        <div className="col-span-4 ">
          <Image
            width={100}
            height={100}
            className="rounded-md h-[250px] w-full "
            alt="Image Loading..."
            src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
          />
        </div>
        <div className="row-span-2 col-span-4 w-full bg-red-400">
          <Image
            width={800}
            height={800}
            className="rounded-md  w-full "
            alt="Image Loading..."
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_6Bw8mmw_uahrdkN7nBmTzaBtpYAQUJDgQLkEVMRlTkK1dBH0GNquI4NElxLZTeL5-Tw&usqp=CAU"
          />
        </div>
        <div className="col-span-4  w-full">
          <Image
            width={100}
            height={100}
            className="rounded-md h-[250px] w-full "
            alt="Image Loading..."
            src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandPage;
