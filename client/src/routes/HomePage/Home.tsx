import { Helmet } from "react-helmet-async";
import ChoiceSection from "./components/ChoiceSection";

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Yamaha Motors</title>
        <meta 
          name="description" 
          content="Yamaha Motors is a leading manufacturer of motorcycles, outboard marine engines, and other power equipment. Explore our range of products and find the perfect fit for your needs." 
        />
      </Helmet>
      <section className="relative -z-10 bg-[url('images/hero.jpg')] h-screen bg-cover bg-top bg-no-repeat  mt-[5.4rem]"></section>
      <ChoiceSection />
    </>
  );
};
export default Home;
