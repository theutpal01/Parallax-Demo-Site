import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import UtilityCard from "../UI/UtilityCard";
import "swiper/css";
import "swiper/css/grid";

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

	return (
		<div className="h-screen flex mx-auto">
			<Swiper
				className="h-full w-full mx-auto py-10 my-20"
				modules={[Grid]}
				slidesPerView={3}
				grid={{
					rows: 2,
				}}
				spaceBetween={35}
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
