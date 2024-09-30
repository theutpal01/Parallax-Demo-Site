import { ParallaxProvider } from "react-scroll-parallax";
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
			<div className="relative w-full min-h-screen overflow-hidden">
				<BG1 />
				<div className="px-5 md:px-16 mt-10 mx-auto relative z-10 bg-transparent">
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
