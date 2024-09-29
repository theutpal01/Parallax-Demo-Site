import HeroSectionCard from "../UI/HeroSectionCard";
import Details from "./Details";
import Join from "./Join";

function Hero() {
	return (
		<div className="mt-10">
			<HeroSectionCard />
			<div className="relative text-center py-72 flex flex-col items-center justify-center mx-auto">
				<h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold font-sans text-gray-400">
					PRACTICAL <span className="text-primary">EDUCATION</span>{" "}
					<br />
					<br />
					FOR <span className="text-primary">FORTUNE</span>{" "}
					REALISATION
				</h2>

				<div className="absolute right-[0%] bottom-[0%] md:right-[0%] md:bottom-[10%]">
					<img
						src="/images/bell.png"
						alt="Bell Icon"
						className="w-20 md:w-32 lg:w-40"
					/>
				</div>

				<div className="absolute right-[10%] bottom-[-10%] md:right-[30%] md:bottom-[-5%]">
					<img
						src="/images/pound.png"
						alt="Pound Icon"
						className="w-8 md:w-16 lg:w-24"
					/>
				</div>
			</div>

			<div className="pl-10">
				<Details />
				<Join />
			</div>
		</div>
	);
}

export default Hero;