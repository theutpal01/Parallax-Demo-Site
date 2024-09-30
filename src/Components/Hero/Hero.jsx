import HeroSectionCard from "../UI/HeroSectionCard";
import Details from "./Details";
import Join from "./Join";

function Hero() {
	return (
		<div className="mt-8">
			<HeroSectionCard />
			<div className="relative text-center py-72 flex flex-col items-center justify-center mx-auto">
				<div className="h-fit py-24 flex justify-center items-center">
					<h2 className="text-2xl z-10 md:text-4xl lg:text-6xl xl:text-8xl font-bold font-sans text-gray-400">
						PRACTICAL{" "}
						<span className="text-primary">EDUCATION</span> <br />
						<br />
						FOR <span className="text-primary">FORTUNE</span>{" "}
						REALISATION
					</h2>
				</div>

				<div className="absolute bottom-[10%] right-[5%]">
					<img
						src="/images/bell.png"
						alt="Bell Icon"
						className="w-24 md:w-36 lg:w-44"
					/>
				</div>
			</div>

			<div>
				<Details />
				<Join />
			</div>
		</div>
	);
}

export default Hero;
