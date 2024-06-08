import Brand from "../components/shared/Brand/Brand";
import HomePage from "./home";
import PopularProductsPage from "./populer";
import FlashPage from "./flash";

const Home = () => {
  return (
    <div>
      <HomePage />
      <FlashPage />
      <Brand />
      <PopularProductsPage />
    </div>
  );
};

export default Home;
