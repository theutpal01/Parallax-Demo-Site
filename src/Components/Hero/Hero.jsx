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
				<img
					className="absolute -z-10 -top-[2%] -right-[15%] lg:-right-[12%] xl:-right-[10%] w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem]"
					src="images/coin.png"
					alt="Dollar"
				/>
				<img
					className="absolute -z-10 -bottom-[5%] sm:-bottom-[8%] md:-bottom-[12%]  lg:-bottom-[20%] -left-[10%] md:-left-[15%] lg:-left-[10%] w-[10rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem]"
					src="images/sphere.png"
					alt="Sphere"
				/>
			</Parallax>
			<div className="relative text-center py-10 md:py-32 lg:py-72 flex flex-col items-center justify-center mx-auto">
				<div className="absolute bottom-[10%] z-0 right-[5%]">
					<img
						src="/images/bell.png"
						alt="Bell Icon"
						className="w-24 md:w-36 lg:w-44"
					/>
				</div>
				<Parallax
					translateY={[60, -60]}
					easing="easeInQuad"
					className="h-full flex justify-center items-center"
				>
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
