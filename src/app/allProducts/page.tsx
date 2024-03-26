import CountDownPage from "@/components/countDown/page";
import CategoryBrand from "@/components/shared/categoryBrand/page";
import PriceFilter from "@/components/shared/priceFilter/page";


const AllProductsPage = () => {

  

  return (
    <div className="my-12">
      <div className="grid grid-cols-12  ">
        <div className="col-span-3 mx-auto">
         <PriceFilter/>
         <CategoryBrand/>
        </div>
        <div className="col-span-9 bg-red-500">
       <div>
     
       </div>
        
          <h2 className="text-4xl font-bold">Our Collection Of Products</h2>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
