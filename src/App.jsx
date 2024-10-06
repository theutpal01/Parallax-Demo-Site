import { Parallax, ParallaxProvider } from "react-scroll-parallax";
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
		<ParallaxProvider>
			<div className="relative w-full min-h-screen overflow-hidden !bg-background">
				<BG1 />
				<div className="mt-10 mx-auto !bg-background text-xs md:text-sm">
						<Header />
						<Hero />
						<DisplayCards />
						<Pricing />
						<Extra />
						<Enroll />
						<Footer />
				</div>
			</div>
		</ParallaxProvider>
	);
}

export default App;
