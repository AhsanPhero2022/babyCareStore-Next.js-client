import BrandPage from "@/components/shared/brand/page";
import FlashSalePage from "@/components/shared/flashSale/page";
import HomePage from "@/components/shared/home/page";

import PopularProductsPage from "@/components/shared/popularProducts/page";

const Home = () => {
  return (
    <div>
      <HomePage/>
      <FlashSalePage />
      <BrandPage />
      <PopularProductsPage/>
    </div>
  );
};

export default Home;
