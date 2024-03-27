import BrandPage from "../components/shared/brand/page";
import HomePage from "../components/shared/home/page";
import PopularProductsPage from "../components/shared/popularProducts/page";
import FlashSalePage from "./flashSale/page";

const Home = () => {
  return (
    <div>
      <HomePage/>
      <FlashSalePage />
      <BrandPage/>
      <PopularProductsPage/>
    </div>
  );
};

export default Home;
