import AllProducts from "./Component/AllProducts";
import Banner from "./Component/Banner";
import Center from "./Component/Center";
import Header from "./Component/Header";
import Footer from "./Component/Footer";

export default function Home() {
  return (
    <div>
      <Center>
        <Banner />

      </Center>
      <Header />
      <Center>
        <AllProducts/>

      </Center>
      <Footer />
    </div>
  );
}
