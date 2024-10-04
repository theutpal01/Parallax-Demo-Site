import { useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

function Details() {
	useEffect(() => {
		// const swiper = document.querySelector('.swiper').swiper;
		// swiper.forceToAxis = true;
		// swiper.releaseOnEdges = true;
		// swiper.sensitivity = 10;
		// swiper.thresholdDelta = 5;
	});

	return (
		<div className="min-h-fit text-gray-400 bg-transparent font-manrope !leading-loose">
			<div className="absolute w-[130rem] h-[90rem] rounded-[50%] border border-yellow-600 origin-center top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

			<Swiper
				// direction="horizontal"
				className="h-[20rem] lg:h-screen w-full z-10 px-5"
				slidesPerView={1}
				mousewheel={true}
				freeMode={true}
				modules={[FreeMode]}
				// modules={[FreeMode, Mousewheel]}
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
						className="object-contain absolute h-1/2 translate-x-1/2 right-3 w-[25rem] md:w-[30rem] lg:w-[35rem] xl:w-[40rem]"
						src="images/fire.png"
						alt="Fire Icon"
					/>
					<img
						src="/images/pound.png"
						alt="Pound"
						className="w-8 md:w-16 lg:w-24 absolute -translate-y-1/2 top-1/4 right-[20%]"
					/>
					<img
						className="absolute bottom-10 md:bottom-20 w-8 md:w-16 lg:w-24"
						src="/images/wallet.png"
						alt="Wallet"
					/>
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
					<img
						className="absolute -translate-y-1/2 top-1/4 right-[25%] w-8 md:w-16 lg:w-24"
						src="/images/thumb.png"
						alt="Thumb"
					/>
					<img
						className="absolute bottom-10 md:bottom-20 left-[25%] w-8 md:w-16 lg:w-24"
						src="/images/chart.png"
						alt="Chart"
					/>
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
