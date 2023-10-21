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
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [state, setState] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}cta`).then((res) => {
      setState(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main className={"bg-[#351F78] overflow-x-hidden"}>
        <Banner />
        <GameCarousel />
        {state !== null && <CallToAction data={state} />}
        {state !== null && <MobileCallToAction data={state} />}
        <Filters />
        <TestimonialsCarousel />
      </main>
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
