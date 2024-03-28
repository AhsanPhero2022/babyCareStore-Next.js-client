import Image from "next/image";
import Link from "next/link";

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
        <div className="row-span-2 col-span-4 w-full mx-auto relative">
          <Image
            width={800}
            height={800}
            className="rounded-md h-[650px] "
            alt="Image Loading..."
            src="https://enfield-bd.com/wp-content/uploads/2022/06/Lightweight-Baby-Stroller-3-In-1-Baby-Travel-Stroller-Baby-Carriage-Bycycle-Baby-Pushchair-Carros-De-Baby-Baby-Stroller-.jpg"
          />
          <h2 className="absolute bottom-10 left-5  text-xl text-white font-bold">Baby Traveling </h2>
        </div>
        <div className="col-span-4 relative ">
          <Image
            width={300}
            height={100}
            className="rounded-md h-[315px] w-full "
            alt="Image Loading..."
            src="https://www.verywellfamily.com/thmb/hrlNtWoTWsA2uWuK5k1ypZ696rU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/98842092-56aafc2f3df78cf772b4b929.jpg"
          />
          <h2 className="absolute bottom-1 left-5 text-xl font-bold ">Baby Bathing </h2>
        </div>
        <div className="row-span-2 col-span-4 w-full  relative">
          <Image
            width={800}
            height={800}
            className="rounded-md h-[650px]"
            alt="Image Loading..."
            src="https://m.media-amazon.com/images/I/71BGbX5hDtL._AC_SX569_.jpg"
          />
          <h2 className="absolute bottom-10 left-5 text-xl  font-bold">Baby Dress </h2>
        </div>
        <div className="col-span-4  w-full relative">
          <Image
            width={200}
            height={200}
            className="rounded-md h-[315px] w-full "
            alt="Image Loading..."
            src="https://www.babyprem.com/clear_cta/1562316489shutterstock_563353231-min.jpg"
          />
          <h2 className="absolute bottom-10 left-5 text-xl font-bold ">Baby Diapering </h2>
        </div>
      </div>
      <div className=" my-12 text-center">
        <Link href='/categorySorted'>
        <button className="btn btn-neutral ">View All Categories</button>
        </Link>
      </div>
    </div>
  );
};

export default BrandPage;
