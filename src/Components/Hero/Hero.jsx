import { Parallax } from "react-scroll-parallax";
import HeroSectionCard from "../UI/HeroSectionCard";
import Details from "./Details";
import Join from "./Join";
import SlideInfo from "./SlideInfo";

function Hero({ ref }) {
	return (
		<div className="mt-8">
			<div className="h-screen relative">
				<Parallax
					className="absolute top-16 -right-[15%] translate-y-1/4 w-[20rem] md:w-[25rem] lg:w-[30rem] xl:w-[35rem]"
					translateX={[-120, 120]}
					speed={-50}
				>
					<img src="images/coin.png" alt="Dollar" />
				</Parallax>
				<Parallax
					className="absolute -bottom-[50%] -left-[15%] -translate-y-1/2  w-[10rem] md:w-[15rem] lg:w-[20rem] xl:w-[25rem]"
					translateX={[120, -120]}
					speed={-50}
				>
					<img src="images/sphere.png" alt="Sphere" />
				</Parallax>
				<Parallax speed={-20}>
					<HeroSectionCard />
				</Parallax>
			</div>
			<div className="relative h-fit lg:h-screen text-center py-72 lg:py-36 flex flex-col items-center justify-center mx-auto">
				<Parallax
					className="absolute w-10 sm:w-16 md:w-24 lg:w-36 bottom-[10%] z-0 right-[5%]"
					speed={100}
					translateY={[50, -50]}
					translateX={[100, -100]}
				>
					<img src="/images/bell.png" alt="Bell Icon" />
				</Parallax>
				<Parallax
					easing="easeInQuad"
					className="h-full flex justify-center items-center"
					speed={50}
					translateY={[50, -50]}
				>
					<h2 className="text-3xl z-10 md:text-4xl lg:text-6xl xl:text-7xl font-bold font-sans text-gray-400">
						PRACTICAL{" "}
						<span className="text-primary">EDUCATION</span> <br />
						<br />
						FOR <span className="text-primary">FORTUNE</span>{" "}
						REALISATION
					</h2>
				</Parallax>
			</div>

			<div>
				<Details ref={ref}/>
				<SlideInfo />
				<Join />
			</div>
		</div>
	);
}

export default Hero;
