import React from "react";
import PriceCard from "../UI/PriceCard";

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

	return (
		<div className="min-h-screen w-full flex flex-col justify-center items-center mt-36">
			<div className="relative h-screen flex justify-center items-center">
				<div className="grid lg:grid-cols-3 gap-16">
					{plans.map((plan, index) => (
						<PriceCard
							key={index}
							plan={plan.plan}
							price={plan.price}
							features={plan.features}
							buttonText={plan.buttonText}
							theme={plan.theme}
						/>
					))}
				</div>
				<img className="absolute w-52 top-20 left-1/4" src="images/puzzle.png" alt="Puzzle" />
				<img className="absolute w-52 top-20 -right-10" src="images/sphere.png" alt="Sphere" />
				<img className="absolute w-52 right-1/4 bottom-16" src="images/circle.png" alt="Coin" />
			</div>
			<p className="w-1/2 py-20 text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold font-manrope text-gray-400 !leading-relaxed">
				“TO <span className="text-red-400">PROCRASTINATE</span> IS A
				CHOICE BUT TO <span className="text-primary">TAKE ACTION</span>{" "}
				IS A NECESSITY.” <br />– AS, CEO of WCU
			</p>
		</div>
	);
}

export default Pricing;
