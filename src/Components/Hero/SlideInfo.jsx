import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";

function SlideInfo() {
	return (
		<div className="h-auto my-20 content-center w-full bg-background">
			<Swiper
				effect={"cube"}
				loop={true}
				autoplay={{	delay: 1500, disableOnInteraction: false }}
				grabCursor={true}
				modules={[EffectCube, Autoplay]}
				className="bg-background-dark shadow p-20 w-full content-center flex flex-col justify-center items-center"
			>
				<SwiperSlide>
					<h2 className="text-3xl z-10 md:text-6xl lg:text-8xl lg:w-1/2 xl:text-9xl font-bold font-inter text-gray-400 !leading-snug">
						Our <span className="text-primary">Vision</span> Is
						Simple
					</h2>
				</SwiperSlide>
				<SwiperSlide>
					<h2 className="text-3xl z-10 md:text-6xl lg:text-8xl xl:text-9xl font-bold font-inter text-gray-400 !leading-snug">
						Help You Become The{" "}
						<span className="text-primary">Beacon Of Success</span>{" "}
						You Always <span className="text-primary">Wanted </span>To
						Be.
					</h2>
				</SwiperSlide>
				<SwiperSlide>
					<h2 className="text-3xl z-10 md:text-6xl lg:text-8xl xl:text-9xl font-bold font-inter text-gray-400 !leading-snug">
						No <span className="text-secondary-dark">Nonsense</span><br />
						No <span className="text-secondary-dark">Timewaste</span><br />
					</h2>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}

export default SlideInfo;
