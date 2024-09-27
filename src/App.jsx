import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Enroll from "./Components/Pricing/Enroll";
import Pricing from "./Components/Pricing/Pricing";
import DisplayCards from "./Components/Pricing/DisplayCards";
import Footer from "./Components/Footer/Footer";
import Extra from "./Components/Pricing/Extra";

function App() {
	return (
		<div className="w-full min-h-screen">
			<div className="container mx-auto py-10 px-1">
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
