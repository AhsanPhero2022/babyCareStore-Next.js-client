import CountDownPage from "@/components/countDown/page";
import CategoryBrand from "@/components/shared/categoryBrand/page";
import PriceFilter from "@/components/shared/priceFilter/page";
import ProductsCollection from "@/components/shared/productsCollection/page";
import RatingsPage from "@/components/shared/ratings/page";


const AllProductsPage = () => {

  

  return (
    <div className="my-12">
      <div className="grid grid-cols-12  ">
        <div className="col-span-3 mx-auto">
         <PriceFilter/>
         <CategoryBrand/>
         <RatingsPage/>
        </div>
        <div className="col-span-9 ">
        <h2 className="text-4xl font-bold">Our Collection Of Products</h2>
        <div>
          <ProductsCollection/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
