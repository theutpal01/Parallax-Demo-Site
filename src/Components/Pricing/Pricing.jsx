import { Parallax } from "react-scroll-parallax";
import PriceCard from "../UI/PriceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect, useRef } from "react";
import "swiper/css";

function Pricing() {
	const plans = [
		{
			plan: "Per Month",
			price: "£29.99",
			features: [
				"Step by Step Guidance",
				"Practical world-class education",
				"1 to 1 support",
				"High-Income Skills Acquisition",
				"World Class Platform",
				"0 Experience Required",
				"50GB Cloud Storage",
			],
			buttonText: "Join this one?",
			theme: "primary",
		},
		{
			plan: "6 Month",
			price: "£149.99",
			features: [
				"Step by Step Guidance",
				"Practical world-class education",
				"1 to 1 support",
				"High-Income Skills Acquisition",
				"World Class Platform",
				"0 Experience Required",
				"50GB Cloud Storage",
			],
			buttonText: "Join this one?",
			theme: "primary",
		},
		{
			plan: "12 Month",
			price: "£299.99",
			features: [
				"Step by Step Guidance",
				"Practical world-class education",
				"1 to 1 support",
				"High-Income Skills Acquisition",
				"World Class Platform",
				"0 Experience Required",
				"50GB Cloud Storage",
			],
			buttonText: "Join this one?",
			theme: "primary",
		},
	];
	
	
	const [currentSlide, setCurrentSlide] = useState(0);
    const slideHeight = 300; // Adjust based on your PriceCard height
    const containerRef = useRef(null);

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const newSlide = Math.floor(scrollPosition / slideHeight);

        if (newSlide !== currentSlide && newSlide >= 0 && newSlide < plans.length) {
            setCurrentSlide(newSlide);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [currentSlide]);


	return (
		<div className="min-h-screen w-full flex flex-col justify-center items-center mt-36 px-10">
			<Parallax
				speed={-25}
				translateX={[-25, 25]}
				className="relative h-screen hidden lg:flex justify-center items-center"
			>
				<div className="grid-cols-3 gap-16 grid">
					{plans.map((plan, index) => (
						<PriceCard
							key={index}
							plan={plan.plan}
							price={plan.price}
							features={plan.features}
							buttonText={plan.buttonText}
							theme={plan.theme}
							className="sm:w-[15rem] md:w-[20rem] lg:w-[20rem] xl:w-[25rem]"
						/>
					))}
				</div>
				<Parallax
					className="absolute w-52 top-20 left-1/4"
					translateY={[-50, 50]}
				>
					<img src="images/puzzle.png" alt="Puzzle" />
				</Parallax>
				<Parallax
					className="absolute w-52 top-20 -right-10"
					translateY={[50, -50]}
				>
					<img src="images/sphere.png" alt="Sphere" />
				</Parallax>
				]\{" "}
				<Parallax
					className="absolute w-52 right-1/4 bottom-16"
					translateX={[50, -50]}
					speed={10}
				>
					<img src="images/circle.png" alt="Coin" />
				</Parallax>
			</Parallax>
			<Swiper className="block lg:hidden h-full w-full" slidesPerView={1} ref={containerRef}>
				{plans.map((plan, index) => (
					<SwiperSlide key={index} className="flex justify-center">
						<PriceCard
							plan={plan.plan}
							price={plan.price}
							features={plan.features}
							buttonText={plan.buttonText}
							theme={plan.theme}
							className="w-[25rem]"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Parallax
				translateY={[50, -50]}
				className="w-1/2 py-20 text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold font-manrope text-gray-400 !leading-relaxed mt-36"
			>
				“TO <span className="text-red-400">PROCRASTINATE</span> IS A
				CHOICE BUT TO <span className="text-primary">TAKE ACTION</span>{" "}
				IS A NECESSITY.” <br />– AS, CEO of WCU
			</Parallax>
		</div>
	);
}

export default Pricing;
