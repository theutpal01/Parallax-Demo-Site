import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Grid, Mousewheel } from "swiper/modules";
import UtilityCard from "../UI/UtilityCard";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";


function DisplayCards() {
	const cards = [
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
		{
			icon: <img src="images/card.png" alt="card" />,
			title: "Lorem Espum",
			description:
				"Abcdef uaslas sachcicwa ja howieuk aclk jaehoi akxz xn lasjc;eo iewsh ooehu yewk eowifowefulsef shfe lwijfsjdl klhoseifls n dslhoi weho weefs lkk nlsjfoiwjpisefjn slhslhfewof ls.    ",
		},
	];

	useEffect(() => {
		// const swiper = document.querySelector('.swiper').swiper;
		// swiper.forceToAxis = true;
		// swiper.releaseOnEdges = true;
		// swiper.sensitivity = 10;
		// swiper.thresholdDelta = 5;
	});

	return (
		<div className="h-screen px-10 flex mx-auto">
			<Swiper
				// direction="horizontal"
				className="hidden lg:block h-full w-full mx-auto py-10 my-20"
				modules={[Grid]}
				slidesPerView={3}
				// modules={[Grid, Mousewheel]}
				mousewheel={true}
				grid={{
					rows: 2,
				}}
				spaceBetween={20}
			>
				{cards.map((card, idx) => (
					<SwiperSlide key={idx} className="flex justify-center">
						<UtilityCard
							icon={card.icon}
							title={card.title}
							description={card.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				className="hidden md:block lg:hidden h-full w-full"
				slidesPerView={2}
				grid={{
					rows: 2
				}}
				modules={[Grid]}
				spaceBetween={20}
			>
				{cards.map((card, idx) => (
					<SwiperSlide key={idx} className="flex justify-center">
						<UtilityCard
							icon={card.icon}
							title={card.title}
							description={card.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				className="block md:hidden h-full w-full"
				slidesPerView={1}
				grid={{
					rows: 2
				}}
				modules={[Grid]}
				spaceBetween={20}
			>
				{cards.map((card, idx) => (
					<SwiperSlide key={idx} className="flex justify-center">
						<UtilityCard
							icon={card.icon}
							title={card.title}
							description={card.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default DisplayCards;
