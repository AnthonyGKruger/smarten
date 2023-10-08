import "./App.css";
import Header from "./components/ui/Header";
import Banner from "./components/Banner/Banner";
import GameCarousel from "./components/GameCarousel/GameCarousel";
import CallToAction from "./components/CallToAction/CallToAction";
import MobileCallToAction from "./components/CallToAction/MobileCallToAction";

function App() {
  return (
    <>
      <Header />
      <main className={"bg-[#2D1E6B]"}>
        <Banner />
        <GameCarousel />
        <CallToAction />
        <MobileCallToAction />
      </main>
    </>
  );
}

export default App;
