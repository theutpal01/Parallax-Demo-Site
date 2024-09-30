import { useRef } from "react";
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

	const sliderRef = useRef(null);
	let isDown = false;
	let startX;
	let scrollLeft;

	const handleMouseDown = (e) => {
		isDown = true;
		sliderRef.current.classList.add("active");
		startX = e.pageX - sliderRef.current.offsetLeft;
		scrollLeft = sliderRef.current.scrollLeft;
	};

	const handleMouseLeave = () => {
		isDown = false;
		sliderRef.current.classList.remove("active");
	};

	const handleMouseUp = () => {
		isDown = false;
		sliderRef.current.classList.remove("active");
	};

	const handleMouseMove = (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - sliderRef.current.offsetLeft;
		const walk = (x - startX) * 2;
		sliderRef.current.scrollLeft = scrollLeft - walk;
	};

	

	return (
		<div className="items-center flex flex-col">
			<div className="h-32"></div>
			<div
				ref={sliderRef}
				className="flex flex-col overflow-auto md:overflow-hidden gap-5 px-10 bg-background w-full cursor-grab"
				onMouseDown={handleMouseDown}
				onMouseLeave={handleMouseLeave}
				onMouseUp={handleMouseUp}
				onMouseMove={handleMouseMove}
			>
				<div className="flex gap-4">

				{cards.map((card) => (
					<UtilityCard
					icon={card.icon}
					title={card.title}
					description={card.description}
					/>
					
					))}
				</div>
				<div className="flex gap-4 mt-10">
				{cards.map((card) => (
					<UtilityCard
					icon={card.icon}
					title={card.title}
					description={card.description}
					/>
					
					))}
					</div>
			</div>
			<div className="h-32"></div>

		</div>
	);
}

export default DisplayCards;