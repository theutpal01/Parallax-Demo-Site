import { Parallax } from "react-scroll-parallax";
import HeroSectionCard from "../UI/HeroSectionCard";
import Details from "./Details";
import Join from "./Join";
import SlideInfo from "./SlideInfo";

function Hero() {
	return (
		<div className="mt-8">
			<Parallax translateY={[40, -50]}>
			<HeroSectionCard />
			</Parallax>
			<div className="relative text-center py-10 md:py-32 lg:py-72 flex flex-col items-center justify-center mx-auto">

				<div className="absolute bottom-[10%] z-0 right-[5%]">
					<img
						src="/images/bell.png"
						alt="Bell Icon"
						className="w-24 md:w-36 lg:w-44"
					/>
				</div>
				<Parallax translateY={[60, -60]} easing="easeInQuad" className="h-full flex justify-center items-center">
					<h2 className="text-2xl z-10 md:text-4xl lg:text-6xl xl:text-7xl font-bold font-sans text-gray-400">
						PRACTICAL{" "}
						<span className="text-primary">EDUCATION</span> <br />
						<br />
						FOR <span className="text-primary">FORTUNE</span>{" "}
						REALISATION
					</h2>
				</Parallax>
			</div>

			<div>
				<Details />
				<SlideInfo />
				<Join />
			</div>
		</div>
	);
}

export default Hero;
