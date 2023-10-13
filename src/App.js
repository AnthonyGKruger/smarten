import "./App.css";
import Header from "./components/ui/Header";
import Banner from "./components/Banner/Banner";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import CallToAction from "./components/CallToAction/CallToAction";
import MobileCallToAction from "./components/CallToAction/MobileCallToAction";
import Filters from "./components/Filters/Filters";
import TestimonialsCarousel from "./components/TestimonialsCarousel/TestimonialsCarousel";
import Footer from "./components/ui/Footer";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Header />
      <main className={"bg-[#351F78]"}>
        <Banner />
        <GameCarousel />
        <CallToAction />
        <MobileCallToAction />
        <Filters />
        <TestimonialsCarousel />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
