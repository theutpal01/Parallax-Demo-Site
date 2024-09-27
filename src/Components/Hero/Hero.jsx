import React from "react";
import HeroSectionCard from "../UI/HeroSectionCard";
import Details from "./Details";
import Join from "./Join";

function Hero() {
	return (
		<div className="mt-10">
			<HeroSectionCard />
			<div className="text-center py-72 flex flex-col items-center justify-center mx-auto">
				<h2 className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl font-bold font-sans text-gray-400">
					PRACTICAL <span className="text-primary">EDUCATION</span>{" "}
					<br />
					<br />
					FOR <span className="text-primary">FORTUNE</span>{" "}
					REALISATION
				</h2>
			</div>
			<div className="pl-10">
				<Details />
				<Join />
			</div>
		</div>
	);
}

export default Hero;
