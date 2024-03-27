import BrandPage from "../components/shared/brand/page";
import HomePage from "./home";
import PopularProductsPage from "./populer";
import FlashPage from "./flash";


const Home = () => {
  return (
    <div>
      <HomePage/>
      <FlashPage/>
      <BrandPage/>
      <PopularProductsPage/>
    </div>
  );
};

export default Home;
