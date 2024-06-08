import CategoryBrand from "../../components/shared/CategoryBrand/CategoryBrand";
import PriceFilter from "../../components/shared/PriceFilter/PriceFilter";
import Ratings from "../../components/shared/Ratings/Ratings";
import ProductsCollection from "./productsCollection/page";

const AllProductsPage = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-12  ">
        <div className="col-span-3 mx-auto">
          <PriceFilter />
          <CategoryBrand />
          <Ratings />
        </div>
        <div className="col-span-9 ">
          <h2 className="text-4xl font-bold">Our Collection Of Products</h2>
          <div>
            <ProductsCollection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;
