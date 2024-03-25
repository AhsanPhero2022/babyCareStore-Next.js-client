"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Homepage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="bg-gray-600 py-32 -mt-20">
      <h1 className="text-4xl text-center mt-10 text-violet-500">
        Welcome To Baby Care Store.
      </h1>
      <h1 className="text-white text-4xl mx-auto mt-5 w-2/3 text-center">
        You can buy baby care product here, please explore first there are many
        categories products.
      </h1>
      <p className="text-center text-gray-500 my-5 w-[80%] mx-auto">
        At our online store, you will find everything you need to care for your
        baby from infancy through toddlerhood and beyond. From essential items
        like diapers, formula, and baby wipes to specialized products such as
        gentle skincare, organic clothing, and educational toys, we have got you
        covered. Our range includes trusted brands known for their commitment to
        quality and safety, ensuring peace of mind for you and your family.
      </p>
      {/* carousel start */}
      <div className="slider-container w-2/3 mx-auto">
        <Slider {...settings}>
          <div className="px-4">
            <Image
              width={500}
              height={500}
              className="rounded-md h-[330px] "
              alt="Image Loading..."
              src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
            />
            <div>
              <h3 className="text-white my-3">Daily care shampoo </h3>
              <div className="flex justify-between items-center ">
              <p className="text-white text-sm">
              
              <span className="text-gray-300 me-5 ">$770 </span> $500
            </p>
            <p className="text-sm text-red-500">Discount: -23%</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <Image
              width={500}
              height={500}
              className="rounded-md h-[330px] "
              alt="Image Loading..."
              src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
            />
            <div>
              <h3 className="text-white my-3">Daily care shampoo </h3>
              <div className="flex justify-between items-center ">
              <p className="text-white text-sm">
              
              <span className="text-gray-300 me-5 ">$630 </span> $500
            </p>
            <p className="text-sm text-red-500">Discount: -18%</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <Image
              width={500}
              height={500}
              className="rounded-md h-[330px] "
              alt="Image Loading..."
              src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
            />
            <div>
              <h3 className="text-white my-3">Daily care shampoo </h3>
              <div className="flex justify-between items-center ">
              <p className="text-white text-sm">
              
              <span className="text-gray-300 me-5 ">$625 </span> $500
            </p>
            <p className="text-sm text-red-500">Discount: -15%</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <Image
              width={500}
              height={500}
              className="rounded-md h-[330px] "
              alt="Image Loading..."
              src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
            />
            <div>
              <h3 className="text-white my-3">Daily care shampoo </h3>
              <div className="flex justify-between items-center ">
              <p className="text-white text-sm">
              
              <span className="text-gray-300 me-5 ">$750 </span> $500
            </p>
            <p className="text-sm text-red-500">Discount: -32%</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <Image
              width={500}
              height={500}
              className="rounded-md h-[330px] "
              alt="Image Loading..."
              src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
            />
            <div>
              <h3 className="text-white my-3">Daily care shampoo </h3>
              <div className="flex justify-between items-center ">
              <p className="text-white text-sm">
              
              <span className="text-gray-300 me-5 ">$670 </span> $500
            </p>
            <p className="text-sm text-red-500">Discount: -13%</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <Image
              width={500}
              height={500}
              className="rounded-md h-[330px] "
              alt="Image Loading..."
              src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
            />
            <div>
              <h3 className="text-white my-3">Daily care shampoo </h3>
              <div className="flex justify-between items-center ">
              <p className="text-white text-sm">
              
              <span className="text-gray-300 me-5 ">$670 </span> $500
            </p>
            <p className="text-sm text-red-500">Discount: -17%</p>
              </div>
            </div>
          </div>
          <div className="px-4">
            <Image
              width={500}
              height={500}
              className="rounded-md h-[330px] "
              alt="Image Loading..."
              src="https://sblglobal.com/admin/public/uploads/products/20230102072943_84.jpg"
            />
            <div>
              <h3 className="text-white my-3">Daily care shampoo </h3>
              <div className="flex justify-between items-center ">
              <p className="text-white text-sm">
              
              <span className="text-gray-300 me-5 ">$670 </span> $500
            </p>
            <p className="text-sm text-red-500">Discount: -33%</p>
              </div>
            </div>
          </div>
      
        </Slider>
      </div>
      {/* carousel end */}
    </div>
  );
};

export default Homepage;
