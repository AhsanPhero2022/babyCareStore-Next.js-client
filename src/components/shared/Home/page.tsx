"use client"

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Homepage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

  return (
    <div>
      <h1 className="text-4xl text-center mt-10 text-violet-500">
        Welcome To Baby Care Store.
      </h1>
      <h1 className="text-4xl mx-auto mt-5 w-2/3 text-center">
        You can buy baby care product here, please explore first there are many
        categories products.
      </h1>
     {/* carousel start */}
     <div className="slider-container w-2/3 ">
      <Slider {...settings}>
        
        <div className=" p-4">
         <img
         className="rounded-md"
         src="https://img.freepik.com/free-vector/abstract-red-circle-black-background-technology_1142-9839.jpg?size=626&ext=jpg&ga=GA1.1.1686332893.1711239738&semt=ais" alt="" />
         <div>
            <h3>Double Bed & Side Tables</h3>
         </div>
        </div>
        <div className=" p-4 ">
         <img
         className="rounded-md"
         src="https://img.freepik.com/free-vector/abstract-red-circle-black-background-technology_1142-9839.jpg?size=626&ext=jpg&ga=GA1.1.1686332893.1711239738&semt=ais" alt="" />
        </div>
        <div className=" p-4 ">
         <img
         className="rounded-md"
         src="https://img.freepik.com/free-vector/abstract-red-circle-black-background-technology_1142-9839.jpg?size=626&ext=jpg&ga=GA1.1.1686332893.1711239738&semt=ais" alt="" />
        </div>
        <div className="p-4 ">
         <img
         className="rounded-md"
         src="https://img.freepik.com/free-vector/abstract-red-circle-black-background-technology_1142-9839.jpg?size=626&ext=jpg&ga=GA1.1.1686332893.1711239738&semt=ais" alt="" />
        </div>
        <div className="p-4 ">
         <img
         className="rounded-md"
         src="https://img.freepik.com/free-vector/abstract-red-circle-black-background-technology_1142-9839.jpg?size=626&ext=jpg&ga=GA1.1.1686332893.1711239738&semt=ais" alt="" />
        </div>
        <div className=" p-4 ">
         <img
         className="rounded-md"
         src="https://img.freepik.com/free-vector/abstract-red-circle-black-background-technology_1142-9839.jpg?size=626&ext=jpg&ga=GA1.1.1686332893.1711239738&semt=ais" alt="" />
        </div>
     
       
      </Slider>
    </div>
     {/* carousel end */}
    </div>
  );
};

export default Homepage;
