import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Enroll from "./Components/Pricing/Enroll";
import Pricing from "./Components/Pricing/Pricing";
import DisplayCards   from "./Components/Pricing/DisplayCards";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div className="w-full min-h-screen p-8">
			<Header />
			<Hero />
			<DisplayCards />
			<Pricing />
			<Enroll />
			<Footer />
		</div>
	);
}

export default App;
