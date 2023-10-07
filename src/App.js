import "./App.css";
import Header from "./components/ui/Header";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <Header />
      <main className={"bg-[#2D1E6B]"}>
        <Banner />
      </main>
    </>
  );
}

export default App;
