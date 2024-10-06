import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import UtilityCard from "../UI/UtilityCard";

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

	const renderedCards = [];
	for (let i = 0; i < cards.length; i += 2) {
		renderedCards.push(
			<div className="flex flex-col gap-10 justify-center">
				{cards.slice(i, i + 2).map((card, index) => (
					<UtilityCard
						key={index}
						icon={card.icon}
						title={card.title}
						description={card.description}
					/>
				))}
			</div>,
		);
	}

	const sectionRef = useRef(null);
	const targetRef = useRef(null);
	gsap.registerPlugin(ScrollTrigger);
	const [breakpoint, setBreakpoint] = useState("large");

	useEffect(() => {
		const handleResize = () => {
			const width = window.innerWidth;
			if (width < 640) {
				setBreakpoint("small");
			} else if (width < 1024) {
				setBreakpoint("medium");
			} else {
				setBreakpoint("large");
			}
		};
		handleResize(); // Set the initial breakpoint
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		const pin = gsap.fromTo(
			sectionRef.current,
			{
				translateX: 0,
			},
			{
				translateX: (breakpoint == "large") ? "-100vw" : (breakpoint == "medium") ? "-200vw" : "-500vw",
				ease: "none",
				duration: 1,
				scrollTrigger: {
					trigger: targetRef.current,
					start: "top top",
					end: "1000 top",
					scrub: 0.6,
					pin: true,
				},
			},
		);

		return () => {
			pin.kill();
		};
	}, [breakpoint]);

	return (
		<div className="h-[210vh] overflow-hidden">
			<div className="relative" ref={targetRef}>
				<div className="h-screen flex absolute *:px-10" ref={sectionRef}>
					{breakpoint == "large" && (
						<>
							<div className="flex w-[100vw] gap-10 justify-center items-center">
								{renderedCards
									.slice(0, 3)
									.map((card, index) => (
										<div key={index}>{card}</div>
									))}
							</div>
							<div className="flex w-[100vw] gap-10 justify-center items-center">
								{renderedCards
									.slice(3, 6)
									.map((card, index) => (
										<div key={index}>{card}</div>
									))}
							</div>
						</>
					)}
					{breakpoint == "medium" && (
						<>
							<div className="flex w-[100vw] gap-10 justify-center items-center">
								{renderedCards
									.slice(0, 2)
									.map((card, index) => (
										<div key={index}>{card}</div>
									))}
							</div>
							<div className="flex w-[100vw] gap-10 justify-center items-center">
								{renderedCards
									.slice(2, 4)
									.map((card, index) => (
										<div key={index}>{card}</div>
									))}
							</div>
							<div className="flex w-[100vw] gap-10 justify-center items-center">
								{renderedCards
									.slice(4, 6)
									.map((card, index) => (
										<div key={index}>{card}</div>
									))}
							</div>
						</>
					)}
					{breakpoint == "small" && (
						<>
							{renderedCards.map((card, index) => (
								<div
									className="flex w-[100vw] gap-10 justify-center items-center"
									key={index}
								>
									{card}
								</div>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	);
}

export default DisplayCards;
