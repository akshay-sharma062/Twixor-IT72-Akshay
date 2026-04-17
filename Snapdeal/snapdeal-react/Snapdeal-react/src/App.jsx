import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Carousel from "./components/craousel";
import DealOfDay from "./components/dealSeaction";
import Footer from "./components/footer";
import CampusBanner from "./ui-components/CampusBanner";
import NewArrivals from "./ui-components/NewArrivals";
import AppDownload from "./ui-components/AppDownload";
import ExploreGrid from "./components/ExploreGrid";
import { useState } from "react";

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  // const [cartOpen, setCartOpen] = useState(false);
  return (
    <>
      <Header cart={cart}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}/>
      <Navbar />
      <Carousel />
      <DealOfDay />
      <CampusBanner />
      <NewArrivals />
      <AppDownload />
      <ExploreGrid  cart={cart} 
                    setCart={setCart}   
                    searchQuery={searchQuery} />
      <Footer />
    </>
  );
};

export default App;