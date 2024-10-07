import { useEffect, useRef } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Details() {
	const sectionRef = useRef(null);
	const targetRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: "-200vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: targetRef.current,
					start: "top top",
					end: "2000 top",
					scrub: 0.6,
					pin: true,
				},
			},
		);

		return () => {
			pin.kill();
		};
	}, []);

	return (
		<div className="text-gray-400 bg-transparent font-manrope !leading-loose">
			<ParallaxProvider>
				<div className="overflow-hidden h-[300vh]">
					<div className="relative" ref={targetRef}>
						<div
							ref={sectionRef}
							className="h-[30vh] sm:h-[40vh] md:h-[70vh] lg:h-screen flex absolute px-10 items-center"
						>
							<div className="relative flex w-[95vw] h-full items-center">
								<p className="text-md sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl font-bold font-manrope text-gray-400 !leading-relaxed w-[80%]">
									THE CURRENT PERIOD OF{" "}
									<span className="text-primary-light">
										ECONOMIC STAGNATION
									</span>{" "}
									AND HYPERINFLATION HAS LED TO{" "}
									<span className="text-white">AN</span>{" "}
									<span className="text-primary-light">
										INCREASE
									</span>{" "}
									IN RELATIVE{" "}
									<span className="text-red-500">
										POVERTY
									</span>{" "}
									IN THE WORLD!
								</p>
								<img
									src="images/fire.png"
									alt="Fire Icon"
									className="object-contain absolute h-1/2 translate-x-1/2 right-3 w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem]"
								/>
								<Parallax
									className="w-8 md:w-16 lg:w-24 absolute -translate-y-1/2 top-1/4 right-[20%] animate-bounce"
									translateY={[50, -50]}
									translateX={[-50, 50]}
									speed={-10}
								>
									<img src="/images/pound.png" alt="Pound" />
								</Parallax>
								<Parallax
									className="absolute bottom-10 md:bottom-20 w-8 md:w-16 lg:w-24"
									speed={-10}
									translateX={[100, 0]}
								>
									<img
										src="/images/wallet.png"
										alt="Wallet"
									/>
								</Parallax>
							</div>

							<div className="relative flex w-[95vw] h-full items-center">
								<p className="pl-[5%] text-md sm:text-lg md:text-xl lg:text-3xl xl:text-6xl font-bold font-manrope text-gray-400 text-right !leading-relaxed w-[80%]">
									AS{" "}
									<span className="text-primary">JOBS</span>{" "}
									PER CAPITA{" "}
									<span className="text-secondary">
										DECLINE
									</span>{" "}
									OVER TIME, IT IS NOW IMPERATIVE TO TURN
									TOWARDS{" "}
									<span className="text-primary">
										ENTREPRENEURSHIP
									</span>{" "}
									AND{" "}
									<span className="text-primary">
										INDEPENDENCE
									</span>
									.
								</p>
								<img
									className="object-contain absolute h-1/2 right-3 translate-x-1/2 w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem]"
									src="images/trophy.png"
									alt="Trophy"
								/>
								<Parallax
									className="absolute -translate-y-1/2 top-1/4 right-[25%] w-8 md:w-16 lg:w-24 animate-bounce		"
									speed={-20}
									translateY={[200, -100]}
									translateX={[0, 100]}
								>
									<img src="/images/thumb.png" alt="Thumb" />
								</Parallax>
								<Parallax
									className="absolute bottom-10 md:bottom-20 left-[25%] w-8 md:w-16 lg:w-24"
									speed={10}
									translateX={[0, 100]}
									translateY={[50, -100]}
									startScroll="30%"
									endScroll="70%"
								>
									d
									<img src="/images/chart.png" alt="Chart" />
								</Parallax>
							</div>

							<div className="relative flex w-[100vw] h-full items-center">
								<p className="pl-[5%] text-md sm:text-lg md:text-xl lg:text-3xl xl:text-6xl font-bold font-manrope text-gray-400 text-right !leading-relaxed w-full">
									AS{" "}
									<span className="text-primary">JOBS</span>{" "}
									PER CAPITA{" "}
									<span className="text-secondary">
										DECLINE
									</span>{" "}
									OVER TIME, IT IS NOW IMPERATIVE TO TURN
									TOWARDS{" "}
									<span className="text-primary">
										ENTREPRENEURSHIP
									</span>{" "}
									AND{" "}
									<span className="text-primary">
										INDEPENDENCE
									</span>
									.
								</p>
								<Parallax
									className="absolute bottom-[3%] right-0 w-20 md:w-32 lg:w-48 animate-bounce"
									translateX={[-300, 0]}
									startScroll="70%"
									endScroll="100%"
								>
									<img
										src="/images/target.png"
										alt="Target"
									/>
								</Parallax>
							</div>
						</div>
					</div>
				</div>
			</ParallaxProvider>

			<Parallax
				translateX={[-10, 10]}
				translateY={[0, 0]}
				className="text-md text-justify md:text-lg lg:text-xl xl:text-3xl font-semibold font-manrope text-gray-400 !leading-loose mt-20 px-10 md:px-28 "
			>
				<span className="text-primary">
					WEALTH CREATIONS UNIVERSITY
				</span>{" "}
				IS AN ONLINE EDUCATION PLATFORM THAT{" "}
				<span className="text-primary">TEACHES</span> INDIVIDUALS FROM
				ALL AROUND THE GLOBE, THE{" "}
				<span className="text-primary">STRATEGIC METHODS</span> ON HOW
				TO MAKE <span className="text-primary">MONEY</span>, THROUGH ITS
				PROVIDENCE OF EDUCATION AND{" "}
				<span className="text-primary">GUIDANCE</span> IN OVER 20
				MODERNISTIC{" "}
				<span className="text-primary">WEALTH ACQUISITION</span>{" "}
				METHODS.
			</Parallax>
		</div>
	);
}

export default Details;
