import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "../../utils/useIsVisible";
import { Parallax } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

function Details() {
	const swiperRef = useRef(null);
	const isInView = useIsVisible(swiperRef);
	const [scroll, setScroll] = useState(true);

	useEffect(() => {
		const handleScroll = (event) => {
			if (isInView) {
				swiperRef.current.focus();
				console.log("scrolling");
				event.preventDefault();
				setScroll(false);
				const { isBeginning, isEnd } = swiperRef.current.swiper;

				if (!isEnd && event.deltaY > 0) {
					swiperRef.current.swiper.slideNext(1000);
					swiperRef.current.swiper.disable();
					setTimeout(() => {
						swiperRef.current.swiper.enable();
					}, 1000);
				} else if (!isBeginning && event.deltaY < 0) {
					swiperRef.current.swiper.slidePrev(1000);
					swiperRef.current.swiper.disable();
					setTimeout(() => {
						swiperRef.current.swiper.enable();
					}, 1000);
				} else {
					if ((isBeginning || isEnd) && !scroll) {
						setTimeout(() => {
							setScroll(true);
						}, 1000);
					}
					console.log(scroll, isBeginning, isEnd);
					if (event.deltaY > 0 && scroll && isEnd) {
						window.scrollBy(0, 100);
					} else if (scroll && event.deltaY < 0 && isBeginning) {
						window.scrollBy(0, -100);
					}
				}
			}
		};

		// Add wheel event listener
		window.addEventListener("wheel", handleScroll, { passive: false });

		return () => {
			// Clean up event listener
			window.removeEventListener("wheel", handleScroll);
		};
	}, [isInView, scroll]); // Add dependencies to avoid stale closures

	return (
		<div className="min-h-fit text-gray-400 bg-transparent font-manrope !leading-loose">
			<div className="absolute w-[130rem] h-[90rem] rounded-[50%] border border-yellow-600 origin-center top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

			<Swiper
				className="h-[20rem] lg:h-screen w-full z-10 px-5"
				direction="horizontal"
				slidesPerView={1}
				ref={swiperRef}
			>
				<SwiperSlide className="relative flex w-full h-full items-center">
					<p className="text-md sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl font-bold font-manrope text-gray-400 !leading-relaxed w-[80%]">
						THE CURRENT PERIOD OF{" "}
						<span className="text-primary-light">
							ECONOMIC STAGNATION
						</span>{" "}
						AND HYPERINFLATION HAS LED TO{" "}
						<span className="text-white">AN</span>{" "}
						<span className="text-primary-light">INCREASE</span> IN
						RELATIVE <span className="text-red-500">POVERTY</span>{" "}
						IN THE WORLD!
					</p>
					<img
						src="images/fire.png"
						alt="Fire Icon"
						className="object-contain absolute h-1/2 translate-x-1/2 right-3 w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem]"
					/>
					<Parallax
						className="w-8 md:w-16 lg:w-24 absolute -translate-y-1/2 top-1/4 right-[20%]"
						translateY={[50, -50]}
						translateX={[-50, 50]}
					>
						<img src="/images/pound.png" alt="Pound" />
					</Parallax>
					<Parallax
						className="absolute bottom-10 md:bottom-20 w-8 md:w-16 lg:w-24"
						speed={-10}
						translateX={[100, 0]}
					>
						<img src="/images/wallet.png" alt="Wallet" />
					</Parallax>
				</SwiperSlide>
				<SwiperSlide className="relative flex w-full h-full items-center justify-center">
					<p className="pr-[5%] text-md sm:text-lg md:text-xl lg:text-3xl xl:text-6xl font-bold font-manrope text-gray-400 text-right !leading-relaxed w-[70%]">
						AS <span className="text-primary">JOBS</span> PER CAPITA{" "}
						<span className="text-secondary">DECLINE</span> OVER
						TIME, IT IS NOW IMPERATIVE TO TURN TOWARDS{" "}
						<span className="text-primary">ENTREPRENEURSHIP</span>{" "}
						AND <span className="text-primary">INDEPENDENCE</span>.
					</p>
					<img
						className="object-contain absolute h-1/2 right-3 translate-x-1/2 w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem]"
						src="images/trophy.png"
						alt="Trophy"
					/>
					<Parallax startScroll={10}
						className="absolute -translate-y-1/2 top-1/4 right-[25%] w-8 md:w-16 lg:w-24"
						translateY={[50, -50]}
						translateX={[-50, 50]}
					>
						<img src="/images/thumb.png" alt="Thumb" />
					</Parallax>
					<Parallax
						className="absolute bottom-10 md:bottom-20 left-[25%] w-8 md:w-16 lg:w-24"
						speed={-10}
						translateX={[100, 0]}
					>
						<img src="/images/chart.png" alt="Chart" />
					</Parallax>
				</SwiperSlide>
				<SwiperSlide className="relative flex w-full h-full items-center justify-end">
					<p className="text-md sm:text-lg md:text-xl lg:text-3xl xl:text-6xl font-bold font-manrope text-gray-400 text-right !leading-relaxed w-[80%]">
						AS <span className="text-primary">JOBS</span> PER CAPITA{" "}
						<span className="text-secondary">DECLINE</span> OVER
						TIME, IT IS NOW IMPERATIVE TO TURN TOWARDS{" "}
						<span className="text-primary">ENTREPRENEURSHIP</span>{" "}
						AND <span className="text-primary">INDEPENDENCE</span>.
					</p>
					<img
						className="absolute bottom-[3%] right-0 w-20 md:w-32 lg:w-48"
						src="/images/target.png"
						alt="Target"
					/>
				</SwiperSlide>
			</Swiper>

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
