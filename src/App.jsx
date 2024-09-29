import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Enroll from "./Components/Pricing/Enroll";
import Pricing from "./Components/Pricing/Pricing";
import DisplayCards from "./Components/Pricing/DisplayCards";
import Footer from "./Components/Footer/Footer";
import Extra from "./Components/Pricing/Extra";
import BG1 from "./Components/UI/BG1";

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <BG1 />
      <div className="container mx-auto py-10 px-1 relative z-10">
        <Header />
        <Hero />
        <DisplayCards />
        <Pricing />
        <Extra />
        <Enroll />
        <Footer />
      </div>
    </div>
  );
}

export default App;