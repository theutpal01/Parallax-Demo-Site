import { useState, useEffect, useRef } from "react";
import { useIsVisible } from "../../utils/useIsVisible";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, FreeMode } from "swiper/modules";
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

	const cardRef = useRef(null);
	const isInView = useIsVisible(cardRef);
	const [scroll, setScroll] = useState(true);

	useEffect(() => {
		const handleScroll = (event) => {
			console.log(isInView);
			if (isInView) {
				cardRef.current.focus();
				event.preventDefault();
				setScroll(false);
				const { isBeginning, isEnd } = cardRef.current.swiper;

				if (!isEnd && event.deltaY > 0) {
					cardRef.current.swiper.slideNext(1000);
					cardRef.current.swiper.disable();
					setTimeout(() => {
						cardRef.current.swiper.enable();
					}, 1000);
				} else if (!isBeginning && event.deltaY < 0) {
					cardRef.current.swiper.slidePrev(1000);
					cardRef.current.swiper.disable();
					setTimeout(() => {
						cardRef.current.swiper.enable();
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
		<div className="h-screen px-10 flex mx-auto">
			<Swiper
				direction="horizontal"
				className="h-full w-full mx-auto py-10 my-20"
				modules={[Grid, FreeMode]}
				breakpoints={
					{
						1024: {
							slidesPerView: 3,
							grid: {
								rows: 2,
							},
						},
						768: {
							slidesPerView: 2,
							grid: {
								rows: 2,
							},
						},
						640: {
							slidesPerView: 1,
							grid: {
								rows: 2,
							},
						},
					}
				}
				mousewheel={true}
				slidesPerView={1}
				grid={{
					rows: 2
				}}
				spaceBetween={20}
				ref={cardRef}
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
