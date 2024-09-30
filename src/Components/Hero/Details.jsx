import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { Parallax } from "react-scroll-parallax";

function Details() {
	return (
		<div className="min-h-screen text-gray-400 bg-transparent font-manrope !leading-loose">
			<div className="absolute w-[130rem] x-0 h-[90rem] rounded-[50%] border border-yellow-600 origin-center top-[33.5%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"></div>

			<Swiper
				className="h-screen w-full z-10"
				slidesPerView={1}
				freeMode={true}
				modules={[FreeMode]}
			>
				<SwiperSlide className="relative flex w-full h-full items-center">
					<p className="text-md sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl font-bold font-manrope text-gray-400 !leading-relaxed w-[70%]">
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
						className="object-contain h-1/4 md:h-1/2 lg:h-full absolute right-28 translate-x-1/2"
						src="images/fire.png"
						alt="Fire Icon"
					/>
					<img
						src="/images/pound.png"
						alt="Pound"
						className="w-8 md:w-16 lg:w-24 absolute top-[15%] right-[20%]"
					/>
					<img
						className="absolute bottom-28"
						src="/images/wallet.png"
						alt="Wallet"
					/>
				</SwiperSlide>
				<SwiperSlide className="relative flex w-full h-full items-center justify-center">
					<p className="text-md sm:text-lg md:text-xl lg:text-3xl xl:text-6xl font-bold font-manrope text-gray-400 text-right !leading-relaxed w-[60%]">
						AS <span className="text-primary">JOBS</span> PER CAPITA{" "}
						<span className="text-secondary">DECLINE</span> OVER
						TIME, IT IS NOW IMPERATIVE TO TURN TOWARDS{" "}
						<span className="text-primary">ENTREPRENEURSHIP</span>{" "}
						AND <span className="text-primary">INDEPENDENCE</span>.
					</p>
					<img
						className="object-contain h-full absolute -right-16 translate-x-1/2"
						src="images/trophy.png"
						alt="Trophy"
					/>
					<img
						className="absolute top-[10%] right-[25%]"
						src="/images/thumb.png"
						alt="Thumb"
					/>
					<img
						className="absolute bottom-[10%] left-[25%]"
						src="/images/chart.png"
						alt="Chart"
					/>
				</SwiperSlide>
				<SwiperSlide className="relative flex w-full h-full items-center justify-end pr-16">
					<p className="text-md sm:text-lg md:text-xl lg:text-3xl xl:text-6xl font-bold font-manrope text-gray-400 text-right !leading-relaxed w-[70%]">
						AS <span className="text-primary">JOBS</span> PER CAPITA{" "}
						<span className="text-secondary">DECLINE</span> OVER
						TIME, IT IS NOW IMPERATIVE TO TURN TOWARDS{" "}
						<span className="text-primary">ENTREPRENEURSHIP</span>{" "}
						AND <span className="text-primary">INDEPENDENCE</span>.
					</p>
					<img
						className="absolute bottom-[5%] right-24 max-w-72"
						src="/images/target.png"
						alt="Chart"
					/>
				</SwiperSlide>
			</Swiper>

			<Parallax translateX={[-30, 30]} className="text-md md:text-lg lg:text-xl xl:text-3xl font-semibold font-manrope text-gray-400 !leading-loose mt-20">
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
